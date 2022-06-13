import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/image', text: '📸 Images' },
  { url: '/video', text: '📺 Videos' }
];

function Links() {
  // const location = useLocation();

  // const isActive = () => {
  //   return location.pathname === links[0].url;
  // };
  let activeStyle = {
    borderBottom: '2px solid #c74040',
    color: '#db2f2f'
  };

  // let activeClassName = 'underline';

  let activeClassName =
    'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2';

  return (
    <div className="flex sm:justify-around justify-between items-center mt-4 mb-2">
      {links.map(({ url, text }, index) => (
        <NavLink
          to={url}
          // className={isActive ? activeClassName : ''}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          key={index}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export default Links;
