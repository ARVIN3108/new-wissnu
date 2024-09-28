import ManWomenBtn from "../../components/ManWomenBtn";
import aniesPNG from "../../assets/imgs/people/anies.png";
import fasyaPNG from "../../assets/imgs/people/fasya.png";

export default function PresidentSlide() {
  return (
    <div className="relative min-h-screen bg-transparent bg-no-repeat before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:bg-gray-600 before:bg-[url(assets/imgs/backgrounds/president.jpg)] before:bg-cover before:bg-center before:bg-blend-multiply">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mx-auto max-w-screen-xl px-4 py-10 text-center lg:py-14">
          <h1 className="mb-4 font-geotricaBold text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Presiden & Wakil Presiden
          </h1>
        </div>
        <div className="mb-16 grid grid-cols-1 font-geotricaRegular lg:grid-cols-2">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-8 pr-8 text-right lg:pr-16">
              <h3 className="text-4xl text-white">Anies Sya{"'"}roni</h3>
              <h4 className="text-xl text-gray-200">Presiden WIsSNU</h4>
              <p className="text-gray-200">Asal: Denpasar, Bali</p>
            </div>
            <div className="col-span-4">
              <img src={aniesPNG} alt="Anies" className="h-auto w-full" />
            </div>
          </div>
          <div className="ml-auto grid grid-cols-12 items-center">
            <div className="col-span-4">
              <img src={fasyaPNG} alt="Fasya" className="h-auto w-3/4" />
            </div>
            <div className="col-span-8">
              <h3 className="text-4xl text-white">Fasya Arafat</h3>
              <h4 className="text-xl text-gray-200">Wakil Presiden WIsSNU</h4>
              <p className="text-gray-200">Asal: Blora, Jawa Tengah</p>
            </div>
          </div>
        </div>
        <ManWomenBtn />
      </section>
    </div>
  );
}
