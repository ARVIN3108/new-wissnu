import { useEffect } from "react";
export default function NavBar() {
  useEffect(() => {
    const navbar = document.getElementById("main-navbar");
    if (navbar) {
      navbar.setAttribute("opened", "false");
      window.addEventListener("resize", () => {
        if (navbar.getAttribute("opened") == "true") {
          if (window.innerWidth > 768) navbar.style.marginTop = "0rem";
          else navbar.style.marginTop = "-13.55rem";
        }
      });
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
            onClick={() => {
              const navbar = document.getElementById("main-navbar");
              if (navbar.getAttribute("opened") == "false") {
                navbar.style.marginTop = "-13.55rem";
                navbar.setAttribute("opened", "true");
              } else {
                navbar.style.marginTop = "0rem";
                navbar.setAttribute("opened", "false");
              }
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
                className="block rounded px-3 py-2 font-geotricaRegular text-[1.05rem] text-white hover:cursor-pointer hover:bg-blue-700 dark:hover:text-white md:p-0 md:hover:border-none md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent"
                onClick={() => (window.location.href = "#")}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                className="block rounded px-3 py-2 font-geotricaRegular text-[1.05rem] text-white hover:cursor-pointer hover:bg-blue-700 dark:hover:text-white md:p-0 md:hover:border-none md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent"
                onClick={() => (window.location.href = "#president")}
              >
                Presiden
              </a>
            </li>
            <li>
              <a className="block rounded px-3 py-2 font-geotricaRegular text-[1.05rem] text-white hover:cursor-pointer hover:bg-blue-700 dark:hover:text-white md:p-0 md:hover:border-none md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent">
                Menteri Koordinator
              </a>
            </li>
            <li>
              <a className="block rounded px-3 py-2 font-geotricaRegular text-[1.05rem] text-white hover:cursor-pointer hover:bg-blue-700 dark:hover:text-white md:p-0 md:hover:border-none md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent">
                Kementrian
              </a>
            </li>
            {/* <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex w-full items-center justify-between px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Dropdown{" "}
                <svg
                  className="ms-2.5 h-2.5 w-2.5"
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
                className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button
                      id="doubleDropdownButton"
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dropdown
                      <svg
                        className="ms-2.5 h-2.5 w-2.5"
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
                      id="doubleDropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            My downloads
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Billing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Rewards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
