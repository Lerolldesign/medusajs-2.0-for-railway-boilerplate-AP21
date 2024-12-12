import type { DefineSchemaType } from "@sanity/types"
import galerie from "./documents/casestudies"

export const schema: { types: DefineSchemaType<"document", any>[] } = {
  types: [galerie],
}
