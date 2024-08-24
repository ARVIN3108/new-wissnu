export default function HomePage() {
  return (
    <div className="relative mt-[-4.72rem] min-h-screen align-middle before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:bg-gray-700 before:bg-[url(assets/bg2.jpg)] before:bg-cover before:bg-center before:bg-blend-multiply">
      <div className="mx-auto max-w-screen-xl px-4 py-28 text-center lg:py-36">
        <h1 className="mb-4 font-geotricaBold text-6xl font-extrabold leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
          WisSNU
        </h1>
        <p className="mb-8 font-geotricaRegular text-4xl font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-5xl">
          Wahana Inspirasi Santri Nurul Ummah
        </p>
        <div className="flex-row space-y-4 sm:justify-center sm:space-y-0">
          <a className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center font-geotricaRegular text-3xl text-white hover:cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Apa itu WisSNU?
          </a>
        </div>
      </div>
    </div>
  );
}
