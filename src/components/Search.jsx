import React from 'react';
import { motion } from 'framer-motion';

function Search({ darkTheme }) {
  return (
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
      <form>
        <label
          class={`${
            darkTheme ? 'border-white ' : 'border-black'
          }  relative block p-4 border-2   rounded-lg`}
          for="name"
        >
          <input
            class={`${
              darkTheme ? 'bg-slate-800' : 'bg-white'
            } w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer  `}
            id="name"
            type="text"
            placeholder="Enter"
          />

          <span
            class={`${
              darkTheme ? 'text-gray-200' : 'text-gray-700'
            }  absolute text-xs font-medium   transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm`}
          >
            Enter
          </span>
        </label>
        <div
          class={`${
            darkTheme ? 'bg-white text-black' : 'bg-black text-white'
          } mt-10   cursor-pointer relative inline-flex items-center px-8 py-3 overflow-hidden   rounded group active:bg-indigo-500 focus:outline-none focus:ring`}
        >
          <span class="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span class="text-sm font-medium transition-all group-hover:mr-4">
            SEARCH
          </span>
        </div>
      </form>
    </motion.div>
  );
}

export default Search;
