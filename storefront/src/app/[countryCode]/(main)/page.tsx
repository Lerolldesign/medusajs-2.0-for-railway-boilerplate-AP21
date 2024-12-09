import { Metadata } from "next"

//import FeaturedProducts from "@modules/home/components/featured-products"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import CookieBot from "@modules/elements/cookiebot"
import Banner from "@modules/home/components/hero/banner"
import HomeSectionEnjoliver from "@modules/home/components/sections/enjoliver"
import HomeSectionIlluminer from "@modules/home/components/sections/illuminer"
import HomeSectionIntroText from "@modules/home/components/sections/introText"
import HomeSectionRestaurer from "@modules/home/components/sections/restaurer"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <div className="bg-black noise">
      <Banner />
      <HomeSectionIlluminer />
      <HomeSectionRestaurer />
      <HomeSectionEnjoliver />
      <HomeSectionIntroText />
      {/**    <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>*/}
      <CookieBot />
    </div>
  )
}
