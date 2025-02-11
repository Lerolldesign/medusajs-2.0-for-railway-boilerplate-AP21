import { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import {
  INotificationModuleService,
  IUserModuleService,
} from "@medusajs/framework/types";
import { Modules } from "@medusajs/framework/utils";
import { BACKEND_URL } from "../lib/constants";
import { EmailTemplates } from "../modules/email-notifications/templates";

export default async function userInviteHandler({
  event: { data },
  container,
}: SubscriberArgs<any>) {
  console.log("userInviteHandler called with data:", data);
  const notificationModuleService: INotificationModuleService =
    container.resolve(Modules.NOTIFICATION);
  const userModuleService: IUserModuleService = container.resolve(Modules.USER);
  const invite = await userModuleService.retrieveInvite(data.id);

  try {
    await notificationModuleService.createNotifications({
      to: invite.email,
      channel: "email",
      template: EmailTemplates.INVITE_USER,
      data: {
        emailOptions: {
          replyTo: "info@example.com",
          subject: "You've been invited to Medusa!",
        },
        inviteLink: `${BACKEND_URL}/app/invite?token=${invite.token}`,
        preview: "The administration dashboard awaits...",
      },
    });
    console.log("Notification sent successfully");
  } catch (error) {
    console.error("Error sending notification:", error);
  }
}

export const config: SubscriberConfig = {
  event: ["invite.created", "invite.resent"],
};
