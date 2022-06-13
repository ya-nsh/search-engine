import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/image', text: '📸 Images' },
  { url: '/video', text: '📺 Videos' }
];

function Links({ darkTheme }) {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = route => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="flex sm:justify-around justify-between items-center mt-4 mb-2">
      {links.map(({ url, text }, index) => (
        <button
          onClick={() => navigate(url)}
          key={index}
          className={`${
            darkTheme ? 'bg-black text-white' : 'bg-black text-white'
          } ${pathMatchRoute(
            `${url}` ? 'border-2 border-red' : ''
          )} inline-block px-8 py-3 text-sm font-medium transition rounded-xl hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring`}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export default Links;
