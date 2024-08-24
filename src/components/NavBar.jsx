export default function NavBar() {
  const menu = ["Beranda", "Tentang WisSNU", "BPH", "Kementerian"];
  return (
    <nav className="sticky start-0 top-0 z-20 mt-[-13.55rem] w-full bg-transparent">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a
          onClick={() => (window.location.href = "#")}
          className="flex items-center space-x-3 hover:cursor-pointer rtl:space-x-reverse"
        >
          <img
            src="./wissnu-300.png"
            className="h-11"
            alt="WisSNU Logo"
          />
          <span className="self-center whitespace-nowrap font-geotricaBold text-2xl font-semibold text-white">
            WisSNU
          </span>
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => (window.location.href = "https://mbi-au.sch.id")}
            className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sekolah Kami
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="sticky hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border-2 border-gray-100 bg-black bg-opacity-25 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse">
            {menu.map((name, index) => {
              return (
                <li key={index}>
                  <a className="block rounded px-3 py-2 font-geotricaRegular text-[1.05rem] text-white hover:cursor-pointer hover:bg-blue-700 dark:hover:text-white md:p-0 md:hover:border-none md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
