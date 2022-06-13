import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ResultContext from '../contexts/ResultContextProvider';
import Loading from './Loading';

function Results({ darkTheme }) {
  const {
    results: { results, image_results, entries: newsEntries },
    loading,
    getResults,
    searchTerm
  } = useContext(ResultContext);
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      getResults(`${location.pathname}/q=${searchTerm}&num=30`);
    }
  }, [searchTerm, location.pathname]);

  if (loading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap mt-24 mb-4 justify-between space-y-6 sm:px-56 ">
          {results?.map(({ link, title }, index) => (
            <div
              key={index}
              className={`${
                darkTheme ? 'border-white' : 'border-black'
              } md:w-2/5 w-full relative block p-8 pb-24 border-4 rounded-2xl  shadow-md transition hover:scale-110 hover:shadow-2xl`}
            >
              <a href={link} target="_blank" rel="noreferrer">
                <p className="mt-4 text-lg font-medium text-gray-500">
                  {link.length > 25 ? link.substring(0, 25) + '...' : link}
                </p>
                <h5
                  className={`${
                    darkTheme ? 'text-white' : 'text-black'
                  } text-xl hover:underline    `}
                >
                  {title}
                </h5>
              </a>
              <span class="absolute bottom-8 right-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class={`${
                    darkTheme ? 'text-white' : 'text-black'
                  } w-10 h-10 `}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      );
    case '/image':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {image_results?.map(({ image, link: { href, title } }, index) => (
            <a
              href={href}
              target="_blank"
              key={index}
              rel="noreferrer"
              className="sm:p-3 p-5 border-2 rounded-lg shadow-md transition hover:scale-110 hover:shadow-2xl m-4"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="sm:w-36 w-36 break-words text-sm mt-4">{title}</p>
            </a>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6 mt-10">
          {newsEntries?.map(({ id, links, source, title }) => (
            <div
              key={id}
              className={`${
                darkTheme ? '  border-white' : ' border-black'
              } border-2 rounded md:w-2/5 w-full p-6 shadow-md transition hover:scale-110 hover:shadow-2xl`}
            >
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer "
                className="hover:underline "
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-blue-300"
                >
                  {' '}
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case '/video':
      return (
        <div className="flex flex-wrap ">
          {results?.map((video, index) => (
            <div key={index} className="p-2">
              {video?.additional_links?.[0].href && (
                <ReactPlayer
                  url={video?.additional_links?.[0].href}
                  controls
                  width="355px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
      );

    default:
      return 'ERROR';
  }
}

export default Results;
