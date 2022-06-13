import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Links from './Links';
import ResultContext from '../contexts/ResultContextProvider';

import { motion } from 'framer-motion';
import { useDebounce } from 'use-debounce';
import { MdClear } from 'react-icons/md';

function Search({ darkTheme }) {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const { setSearchTerm } = useContext(ResultContext);
  const [debouncedValue] = useDebounce(text, 250);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  const submitHandler = e => {
    navigate('/search');
  };

  return (
    <>
      <motion.div
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 0
        }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        className="w-1/2 m-auto relative"
      >
        <label
          className={`${
            darkTheme ? 'border-white ' : 'border-black'
          }  relative block p-4 border-2   rounded-lg`}
          htmlFor="name"
        >
          <input
            className={`${
              darkTheme ? 'bg-slate-800' : 'bg-white'
            } w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer relative `}
            id="name"
            type="text"
            placeholder="Enter"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          {text !== '' && (
            <button
              type="button"
              className={`absolute right-0 top-0 bottom-0 p-2 text-gray-500 ${
                darkTheme ? 'hover:text-gray-100' : 'hover:text-gray-700'
              } `}
              onClick={() => setText('')}
            >
              <MdClear />
            </button>
          )}

          <span
            className={`${
              darkTheme ? 'text-gray-200' : 'text-gray-700'
            }  absolute text-xs font-medium   transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm`}
          >
            Enter
          </span>
        </label>
        <div
          className={`${
            darkTheme ? 'bg-white text-black' : 'bg-black text-white'
          } mt-10   cursor-pointer relative inline-flex items-center px-8 py-3 overflow-hidden   rounded group active:bg-indigo-500 focus:outline-none focus:ring`}
        >
          <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span
            className="text-sm font-medium transition-all group-hover:mr-4"
            onClick={submitHandler}
          >
            SEARCH
          </span>
        </div>
      </motion.div>
    </>
  );
}

export default Search;
