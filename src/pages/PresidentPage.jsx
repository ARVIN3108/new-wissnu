import ManWomenBtn from "../components/ManWomenBtn";

export default function PresidentPage() {
  return (
    <div
      className="relative min-h-screen bg-transparent bg-no-repeat before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:bg-gray-600 before:bg-[url(assets/backgrounds/president.jpg)] before:bg-cover before:bg-center before:bg-blend-multiply"
      id="president"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 text-center lg:py-24">
        <h1 className="mb-4 font-geotricaBold text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Presiden & Wakil Presiden
        </h1>
      </div>
      <div className="couple grid grid-cols-1 font-geotricaRegular lg:grid-cols-2">
        <div className="grid grid-cols-12 items-center text-white">
          <div className="col-span-8 pr-8 text-right lg:pr-16">
            <h3 className="text-4xl">Anies Syaroni</h3>
            <h4 className="text-xl">Presiden WIsSNU</h4>
            <p>Asal: Lorem</p>
            <p>Mafa: Ipsum</p>
            <p>Mifa: Afia</p>
          </div>
          <div className="col-span-4">
            <img
              src="./src/assets/people/anies-removebg.png"
              alt="ARVIN3108"
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="ml-auto grid grid-cols-12 items-center text-white">
          <div className="col-span-4">
            <img
              src="./src/assets/people/fasya-canva2.png"
              alt="Vinia"
              className="h-auto w-3/4"
            />
          </div>
          <div className="col-span-8">
            <h3 className="text-4xl">Fasya Arafat</h3>
            <h4 className="text-xl">Wakil Presiden WIsSNU</h4>
            <p>Asal: Lorem</p>
            <p>Mafa: Ipsum</p>
            <p>Mifa: Afia</p>
          </div>
        </div>
      </div>
      <ManWomenBtn />
    </div>
  );
}
