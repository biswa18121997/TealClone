


import { useState } from 'react';
import Tools from './Tools';
import More from './More';

export default function Navbar() {
  const [toolStatus, setToolStatus] = useState(false);
  const [moreStatus, setMoreStatus] = useState(false);
  const [navVisibility, setNavVisibility] = useState(false);

  const navLinks = [
    { name: 'AI Resume Builder', href: '#' },
    { name: 'Job Application Tracker', href: '#' },
    { name: 'Tools', href: '#', dropdown: true },
    { name: 'More', href: '#', dropdown: true },
  ];

  return (
    <nav className="flex items-center justify-around p-2 sticky top-0 bg-white shadow z-50 max-w-[100vw] h-[10vh]">
      <div className="flex items-center m-5 mr-52">
        <img
          src="https://cdn.prod.website-files.com/62775a91cc3db44c787149de/62775d8abf9f57629c567a0a_Group%201148.svg"
          alt="Teal Logo"
          className="mr-2 size-32 sm:size-40"
        />
      </div>

      <div className="md:hidden pr-4">
        <button onClick={() => setNavVisibility(!navVisibility)}>
          <i className="fa-solid fa-bars text-2xl text-gray-700"></i>
        </button>
      </div>

      <div className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static bg-white w-full left-0 top-[70px] md:top-auto px-6 md:px-0 ${navVisibility ? 'flex' : 'hidden'}`}>
        {navLinks.map((link, index) => (
          <h1
            key={index}
            className="text-gray-700 hover:text-teal-700 font-bold text-lg group cursor-pointer"
          >
            {link.name}
            {link.dropdown && (
              <span
                onClick={
                  link.name === 'Tools'
                    ? () => setToolStatus(!toolStatus)
                    : link.name === 'More'
                    ? () => setMoreStatus(!moreStatus)
                    : undefined
                }
                className="ml-1 inline-block transform group-hover:rotate-180 transition"
              >
                <i className="fa-regular fa-square-caret-down"></i>
              </span>
            )}
            {link.dropdown && link.name === 'Tools' && toolStatus && <Tools />}
            {link.dropdown && link.name == 'More' && moreStatus && <More />}
          </h1>
        ))}
      </div>

      <div className="hidden md:flex space-x-4 p-1 w-1/5">
        <button className=" p-2 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 hover:text-gray-700 text-nowrap">Sign up</button>
        <button className="w-fit p-2 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">Log in</button>
      </div>
    </nav>
  );
}
