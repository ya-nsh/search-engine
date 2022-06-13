import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDarkMode, MdLightMode, MdOutlineDarkMode } from 'react-icons/md';
import Search from './Search';
import Links from './Links';

function Navbar({ darkTheme, darkModeHandler }) {
  const location = useLocation();

  return (
    <div>
      <header className={darkTheme ? 'bg-black' : 'bg-white'}>
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="md:flex md:items-center md:gap-12">
              <Link
                className={`${darkTheme ? 'text-white' : 'text-black'} block `}
                to="/"
              >
                <span className="font-bold text-xl tracking-tight">
                  Search Engine 👋
                </span>
              </Link>
            </div>
            {/* <div className="block">
              <nav aria-labelledby="header-navigation">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className={`${
                        darkTheme ? 'text-white' : 'text-black'
                      }  text-xs transition hover:text-gray-500/75 `}
                      to="/about"
                    >
                      ABOUT
                    </Link>
                  </li>
                </ul>
              </nav>
            </div> */}

            <div className="flex items-center gap-4">
              <div className="sm:gap-4 sm:flex" onClick={darkModeHandler}>
                {darkTheme ? (
                  <div className="flex items-center gap-4">
                    <div className="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded-full hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring cursor-pointer">
                      <MdLightMode />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded-full hover:scale-110 hover:shadow-xl active:text-indigo-500 focus:outline-none focus:ring cursor-pointer">
                      <MdDarkMode />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {location.pathname !== '/' && (
        <div className="mt-4">
          <Links />
        </div>
      )}
    </div>
  );
}

export default Navbar;
