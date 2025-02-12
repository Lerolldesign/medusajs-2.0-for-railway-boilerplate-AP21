import { Heading } from "@medusajs/ui"
import { cookies, type UnsafeUnwrappedCookies } from "next/headers"

import { HttpTypes } from "@medusajs/types"
import CartTotals from "@modules/common/components/cart-totals"
//import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OnboardingCta from "@modules/order/components/onboarding-cta"
import OrderDetails from "@modules/order/components/order-details"
import PaymentDetails from "@modules/order/components/payment-details"
import ShippingDetails from "@modules/order/components/shipping-details"

type OrderCompletedTemplateProps = {
  order: HttpTypes.StoreOrder
}

export default function OrderCompletedTemplate({
  order,
}: OrderCompletedTemplateProps) {
  const isOnboarding =
    (cookies() as unknown as UnsafeUnwrappedCookies).get("_medusa_onboarding")
      ?.value === "true"

  return (
    <div className="py-6 noise !bg-creamy min-h-[calc(100vh-64px)]">
      <div className="content-container flex flex-col justify-center items-center gap-y-10 max-w-4xl h-full w-full mt-20">
        {isOnboarding && <OnboardingCta orderId={order.id} />}
        <div
          className="flex flex-col gap-4 max-w-4xl h-full bg-creamy noise w-full py-10"
          data-testid="order-complete-container"
        >
          <Heading
            level="h1"
            className="flex flex-col gap-y-3 text-ui-fg-base text-3xl text-lune mb-4"
          >
            <span>Merci!</span>
            <span>Nous avons bien reçu votre commande</span>
          </Heading>
          <OrderDetails order={order} />
          <Heading
            level="h2"
            className="flex flex-row text-xl text-lune md:text-2xl"
          >
            Récapitulatif
          </Heading>
          <Items items={order.items} />
          <CartTotals totals={order} />
          <ShippingDetails order={order} />
          <PaymentDetails order={order} />

          {/* Help    <Help /> */}
        </div>
      </div>
    </div>
  )
}
