import Image from "next/image"

export default function IntroIlluminer() {
  return (
    <div className="bg-[#111111] noise">
      <div className="py-20 xl:py-[2vh] 2xl:py-[10vh] h-[90vh] 2xl:h-[110vh] justify-between">
        <div className="relative top-5 md:top-20 xl:md:top-52 flex w-full px-[6vw] md:px-[15vw] xl:px-[8vw] 2xl:px-[4vw]">
          <p className="text-creamy font-medium font-lune tracking-wider lg:px-72 text-[1.85rem] leading-[2.3rem] 2xl:text-6xl 2xl:leading-[4rem] text-center">
            L’abat-jour se déclinera sous toutes ses formes en s’adaptant à une
            décoration existante mais pourra aussi devenir la pièce maîtresse de
            votre intérieur en lui insufflant son propre style.
          </p>
        </div>
      </div>

      <div className=" bg-creamy mx-auto noise">
        <div className="flex flex-col lg:flex-row py-32 md:py-20 lg:py-10 items-center justify-center">
          <div className="relative bottom-[10vh] md:bottom-[5vh]  lg:bottom-[10vh] w-full xl:w-[45vw] 2xl:w-[45vw] ">
            <h3
              className="text-lune z-30 font-lune text-[2.5rem] mb:text-[3.5rem] xl:text-6xl 2xl:text-9xl relative  flex flex-col top-0 md:top-10 lg:top-0
         left-5 md:left-20 xl:left-[45vw] 2xl:left-[16vw] "
            >
              Créer
              <span className="text-3xl md:text-3xl xl:text-4xl 2xl:text-7xl ml-[4vw] px-3 ">
                l’ambiance
              </span>
            </h3>
            <div
              className="text-gray-600 md:px-5 2xl:left-10 mx-10 md:mx-20 xl:mx-24 2xl:mx-28 py-20 md:py-20  relative
         leading-6 2xl:leading-7 
         text-[.85rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]"
            >
              <p>
                Qu’il diffuse ou reflète la lumière, l’abat-jour est un élément
                incontournable du décor intérieur. A la maison comme dans votre
                restaurant ou votre boutique, il garde certes son utilité mais
                revêt des aspects variés: il peut être sobre et classique,
                coloré ou contemporain. Il détermine une fonction et une
                ambiance. Contrecollé, cousu, finement plissé ou festonné, il
                saura s’adapter et achever l’ensemble de votre décor. Le plus
                souvent en tissu, garni de franges, de perles ou de
                passementeries variées, il épousera des formes galbées, cintrées
                ou droites données par des carcasses pouvant être fabriquées sur
                mesure ou restaurées qui redonneront toute leur fraîcheur à vos
                anciens luminaires (Pieds, suspension, applique, lustre….)
              </p>
            </div>
          </div>
          <div className="relative bottom-[10vh] md:bottom-[5vh] lg:bottom-[10vh] w-full xl:w-[50vw] 2xl:w-[50vw] rounded-[5vw] md:rounded-r-3xl 2xl:left-10">
            <Image
              src="https://lunecloud.fra1.digitaloceanspaces.com/illuminer.avif"
              width={1920}
              height={1080}
              alt="image"
              className="object-cover  md:px-0 h-[60vh] md:h-[65vh] 2xl:h-[100vh] rounded-[5vw] md:rounded-l-3xl "
            />

            <h4 className="relative top-10 md:top-10 text-2xl md:text-2xl xl:text-3xl 2xl:text-6xl text-center text-gray-600 py-10 md:py-20 font-lune mx-10 md:mx-20">
              Abat-jour à poser, suspension, applique, baladeuse, cousus,
              contrecollés
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
