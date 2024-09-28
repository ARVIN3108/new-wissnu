export default function HomePage() {
  return (
    <div className="relative mt-[-4.73rem] min-h-screen bg-no-repeat align-middle before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:bg-gray-700 before:bg-[url(assets/imgs/backgrounds/home.jpg)] before:bg-cover before:bg-center before:bg-blend-multiply">
      <div className="mx-auto max-w-screen-xl px-4 py-28 text-center lg:py-36">
        <h1 className="mb-2 font-geotricaBold text-6xl font-extrabold leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
          WIsSNU
        </h1>
        <p className="mb-8 font-geotricaRegular text-4xl font-normal text-gray-200 sm:px-16 lg:px-48 lg:text-5xl">
          Wahana Inspirasi Santri Nurul Ummah
        </p>
        <div className="mb-12">
          <a className="rounded px-4 py-2 font-geotricaRegular text-3xl text-gray-100 ring-2 ring-yellow-200 ring-offset-1 ring-offset-yellow-200 lg:text-4xl">
            Kabinet: Reformasi
          </a>
        </div>
        <div className="flex-wrap space-x-0 space-y-4 sm:justify-center sm:space-x-4 sm:space-y-0">
          <a
            onClick={() => (window.location.href = "#about-wissnu")}
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center font-geotricaRegular text-3xl text-white hover:cursor-pointer hover:bg-blue-800"
          >
            Apa Itu WIsSNU?
          </a>
          <a className="inline-flex items-center justify-center rounded-lg bg-green-500 px-5 py-3 text-center font-geotricaRegular text-3xl text-white hover:cursor-pointer hover:bg-green-600">
            Kenapa Reformasi?
          </a>
        </div>
      </div>
    </div>
  );
}
