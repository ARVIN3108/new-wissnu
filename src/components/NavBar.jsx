import { useEffect, useState } from "react";
export default function NavBar() {
  const [isMainDropdown, setMainDropdown] = useState(false);
  const [isMenko1Dropdown, setMenko1Dropdown] = useState(false);
  const [isMenko2Dropdown, setMenko2Dropdown] = useState(false);
  const [isMenko3Dropdown, setMenko3Dropdown] = useState(false);
  useEffect(() => {
    const navbar = document.getElementById("main-navbar");
    if (navbar) {
      const updateMargin = () => {
        navbar.style.marginTop =
          navbar.getAttribute("opened") === "true" && window.innerWidth <= 768
            ? "-13.55rem"
            : "0rem";
      };

      navbar.setAttribute("opened", "false");
      window.addEventListener("resize", updateMargin);

      return () => window.removeEventListener("resize", updateMargin);
    }
  }, []);

  return (
    <nav
      className="sticky start-0 top-0 z-20 w-full rounded-b-lg bg-black/40"
      id="main-navbar"
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a
          onClick={() => (window.location.href = "#")}
          className="flex items-center space-x-3 hover:cursor-pointer rtl:space-x-reverse"
        >
          <img src="./wissnu-300.png" className="h-11" alt="WisSNU Logo" />
          <span className="self-center whitespace-nowrap font-geotricaBold text-2xl font-semibold text-white">
            WIsSNU
          </span>
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() =>
              (window.location.href = "https://admisi.mbi-au.sch.id")
            }
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
            onClick={() => {
              const navbar = document.getElementById("main-navbar");
              const isOpen = navbar.getAttribute("opened") === "true";
              navbar.setAttribute("opened", isOpen ? "false" : "true");
              navbar.style.marginTop = isOpen ? "0rem" : "-13.55rem";
            }}
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
          <ul className="mt-4 flex flex-col rounded-lg border-2 border-gray-100 bg-black/25 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse">
            <li>
              <a
                className="block rounded px-3 py-2 font-geotricaRegular text-[1.05rem] text-white hover:cursor-pointer hover:bg-blue-700 md:p-0 md:hover:border-none md:hover:bg-transparent md:hover:text-blue-500"
                onClick={() => (window.location.href = "#")}
              >
                Beranda
              </a>
            </li>
            <li>
              <a className="block rounded px-3 py-2 font-geotricaRegular text-[1.05rem] text-white hover:cursor-pointer hover:bg-blue-700 md:p-0 md:hover:border-none md:hover:bg-transparent md:hover:text-blue-500">
                MSDP
              </a>
            </li>
            <li>
              <a className="block rounded px-3 py-2 font-geotricaRegular text-[1.05rem] text-white hover:cursor-pointer hover:bg-blue-700 md:p-0 md:hover:border-none md:hover:bg-transparent md:hover:text-blue-500">
                Berita
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex w-full items-center justify-between rounded px-3 py-2 font-geotricaRegular text-[1.05rem] text-white hover:bg-blue-700 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
                onClick={() => setMainDropdown(!isMainDropdown)}
              >
                Kementerian
                <svg
                  className={`ms-2.5 h-2.5 w-2.5 transition-transform duration-300 ${isMainDropdown ? "rotate-180" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden w-52 divide-y divide-gray-100 rounded-lg bg-black/40 font-normal shadow"
              >
                <ul
                  className="text-sm text-white"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li aria-labelledby="dropdownNavbarLink">
                    <button
                      id="menko1DropdownButton"
                      data-dropdown-toggle="menko1Dropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex w-full items-center justify-between rounded rounded-t-lg px-4 py-[0.6rem] hover:bg-blue-700"
                      onClick={() => setMenko1Dropdown(!isMenko1Dropdown)}
                    >
                      Menko Akademik
                      <svg
                        className={`ms-2.5 h-2.5 w-2.5 transition-transform duration-300 ${isMenko1Dropdown ? "rotate-90" : "-rotate-90"}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="menko1Dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-black/40 shadow"
                    >
                      <ul
                        className="text-sm text-white"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block rounded rounded-t-lg px-4 py-[0.6rem] hover:bg-blue-700"
                          >
                            Kemenderistek
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block rounded px-4 py-[0.6rem] hover:bg-blue-700"
                          >
                            Kemenkominfo
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block rounded rounded-b-lg px-4 py-[0.6rem] hover:bg-blue-700"
                          >
                            Kemenkes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button
                      id="menko2DropdownButton"
                      data-dropdown-toggle="menko2Dropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex w-full items-center justify-between rounded px-4 py-[0.6rem] hover:bg-blue-700"
                      onClick={() => setMenko2Dropdown(!isMenko2Dropdown)}
                    >
                      Menko Pengembangan
                      <svg
                        className={`ms-2.5 h-2.5 w-2.5 transition-transform duration-300 ${isMenko2Dropdown ? "rotate-90" : "-rotate-90"}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="menko2Dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-black/40 shadow"
                    >
                      <ul
                        className="text-sm text-white"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block rounded rounded-t-lg px-4 py-[0.6rem] hover:bg-blue-700"
                          >
                            Kemenraga
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block rounded px-4 py-[0.6rem] hover:bg-blue-700"
                          >
                            Kemenkap
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block rounded px-4 py-[0.6rem] hover:bg-blue-700"
                          >
                            Kemenkoptri
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block rounded rounded-b-lg px-4 py-[0.6rem] hover:bg-blue-700"
                          >
                            Kemencling
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button
                      id="menko3DropdownButton"
                      data-dropdown-toggle="menko3Dropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex w-full items-center justify-between rounded rounded-b-lg px-4 py-[0.6rem] hover:bg-blue-700"
                      onClick={() => setMenko3Dropdown(!isMenko3Dropdown)}
                    >
                      Menko Pemberdayaan
                      <svg
                        className={`ms-2.5 h-2.5 w-2.5 transition-transform duration-300 ${isMenko3Dropdown ? "rotate-90" : "-rotate-90"}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="menko3Dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-black/40 shadow"
                    >
                      <ul
                        className="text-sm text-white"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block rounded rounded-t-lg px-4 py-[0.6rem] hover:bg-blue-700"
                          >
                            Kemenkasi
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block rounded px-4 py-[0.6rem] hover:bg-blue-700"
                          >
                            Kemenmastik
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block rounded px-4 py-[0.6rem] hover:bg-blue-700"
                          >
                            Kemensekreat
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block rounded rounded-b-lg px-4 py-[0.6rem] hover:bg-blue-700"
                          >
                            Kemenbud
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
