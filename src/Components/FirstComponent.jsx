import React from 'react';

export default function FirstComponent () {
  return (
    <section className="flex flex-col items-center justify-center h-[50vh] text-center px-4 py-16 bg-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        Better Resume. 
        <br />Faster Search. More Offers.
      </h1>
      <p className="mt-4 text-gray-600 text-base md:text-lg max-w-md">
        Simplify your job search and land your next position sooner with Teal's all-in-one suite of tools.
      </p>
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <button className="px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 text-lg">
          Sign Up! - It's 100% Free!
        </button>
        <button className="px-6 py-3 bg-teal-600 text-black rounded-full hover:bg-teal-700 text-lg">
          Watch a Demo
        </button>
      </div>
      <hr />
    </section>
  );
};

