import { Carousel } from "@/components/ui/carousel"
import HeroEnjoliver from "@modules/pages/enjoliver/heroEnjoliver"
import IntroEnjoliver from "@modules/pages/enjoliver/introEnjoliver"
import SecondEnjoliver from "@modules/pages/enjoliver/secondEnjoliver"
import ThirdEnjoliver from "@modules/pages/enjoliver/thirdEnjoliver"

export default function Enjoliver() {
  return (
    <div className="overflow-x-hidden">
      <HeroEnjoliver />
      <IntroEnjoliver />
      <SecondEnjoliver />
      <ThirdEnjoliver />
      <Carousel />

      {/** <DraggableProjects />
      <ScrollSection />  <Carousel />*/}
    </div>
  )
}
