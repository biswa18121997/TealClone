import { useState} from 'react';
import Tools from './Tools';

export default function() {
  const [toolStatus, setToolStatus] = useState(false);
  const [moreStatus, setMoreStatus] = useState(false);
  const navLinks = [
    { name: 'AI Resume Builder', href: '#' },
    { name: 'Job Application Tracker', href: '#' },
    { name: 'Tools', href: '#', dropdown: true },
    { name: 'More', href: '#', dropdown: true },
  ];

  return (
    <nav className="flex items-center justify-around p-2 h-[5vw] sticky top-0 bg-white shadow z-50">
      <div className="flex items-center">
        <img src="https://cdn.prod.website-files.com/62775a91cc3db44c787149de/62775d8abf9f57629c567a0a_Group%201148.svg" alt="Teal Logo" className="mr-2 size-40" />
        {/* <span className="text-lg font-bold text-teal-700">teal</span> */}
      </div>
      <div className="flex space-x-6">
        {navLinks.map((link, index) => (
          <h1
            key={index}
            href={link.href}
            className="text-gray-700 hover:text-teal-700 font-bold text-lg group"
          >
            {link.name}
            {link.dropdown && <span onClick={link.name == 'Tools' ? ()=>setToolStatus(!toolStatus) : ''} className="transform group-hover:rotate-90 transition"> <i className="fa-regular fa-square-caret-down  transform group-hover:rotate-180 transition "></i></span>}
            {link.dropdown && link.name == 'Tools' && toolStatus && <Tools />}
          </h1>
        ))}
      </div>
      <div className="flex space-x-4 pr-8">
        <button className="px-8 py-2 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 hover:text-gray-700">
          Sign up
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
          Log in
        </button>
      </div>
    </nav>
  );
};

