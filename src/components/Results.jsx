import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ResultContext from '../contexts/ResultContextProvider';
import Loading from './Loading';

function Results() {
  const { results, loading, getResults, searchTerm } =
    useContext(ResultContext);
  const location = useLocation();

  useEffect(() => {
    getResults('/search/q=javascript mastery&num=40');
  }, []);

  if (loading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                href={href}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="sm:p-3 p-5"
              >
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </div>
      );
    case '/news':
      return 'news';
    case '/videos':
      return 'videos';

    default:
      return 'ERROR';
  }
}

export default Results;
