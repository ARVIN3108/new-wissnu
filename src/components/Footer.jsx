export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-blue-700 p-2 text-white shadow transition hover:bg-blue-800 sm:p-3 lg:p-4"
            href="#"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <img src="./wissnu-300.png" className="h-11" alt="WisSNU Logo" />
              <span className="self-center whitespace-nowrap px-3 font-geotricaBold text-2xl font-semibold text-white">
                WisSNU
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-200 lg:text-left">
              WIsSNU merupakan organisasi intra sekolah, yaitu organisasi
              gabungan antara OSIS dan organisasi pondok. Penggabungan OSIS dan
              organisasi pondok ini bermula dari kesamaan fungsi, yaitu sebagai
              wadah untuk menampung aspirasi santri MBI Amanatul Ummah.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-gray-100 transition hover:text-gray-100/75"
                href="https://instagram.com/wissnumbiau"
              >
                {" "}
                Instagram{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-100 transition hover:text-gray-100/75"
                href="https://youtube.com/@wahanainspirasisantrinurul1147"
              >
                {" "}
                YouTube{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-100 transition hover:text-gray-100/75"
                href="https://github.com/ARVIN3108/new-wissnu"
              >
                {" "}
                Source Code{" "}
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-300 lg:text-right">
          Copyright &copy; 2024 WIsSNU Reformation Cabinet | MBI-AU Pacet.
          Created by ARVIN D.T. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
