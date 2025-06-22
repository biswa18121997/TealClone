
import { useState } from "react";

export default function HowItWorks() {
    let [filterIndex, setFilterIndex ] = useState(0);

    const steps = [
  { 
    number: 0, 
    label: "Sign Up!",
    image : 'https://cdn.prod.website-files.com/62775a91cc3db44c787149de/67d0c0cb41f60e0924f59d6a_Set%20up%20your%20goals%20in%20Teal.webp'
},
  { number: 1,
    label: "Search",
    image: 'https://cdn.prod.website-files.com/62775a91cc3db44c787149de/67d0c31854c21c6957c44f84_Search%20Anywhere%20and%20Everywhere.webp'
 },
  { number: 2,
    label: "Apply",
    image : 'https://cdn.prod.website-files.com/62775a91cc3db44c787149de/67d0cb96e556a7c36f67f459_5f753aa335416c890be900c7bd9b3d15_Submit%20the%20best%20applications%20and%20stand%20out.webp'
},
  { number: 3, 
    label: "Grow",
    image : 'https://cdn.prod.website-files.com/62775a91cc3db44c787149de/67d0cdb06aeec896bbafe5fd_Just-in-time%20guidance%20every%20step%20of%20the%20way.webp'

},
];
  return (
    <section className="w-full py-16 px-4 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>

        <div className="bg-yellow-400 rounded-2xl p-6 md:p-10 flex justify-around items-center w-full">
          <img
            src={steps[filterIndex].image}
            alt="Application Goal Modal"
            className="rounded-xl shadow-md w-1/2 h-auto border"
          />

           <div className="flex flex-col gap-4 w-1/4 ">
            <h3 className=" font-bold text-3xl">
                Create a free Teal Account & Set Up Goals
            </h3><br />
            <p className="text-gray-700 text-lg font-semibold">
                Use the right keywords from job descriptions to highlight your <br />
                qualifications on your resume.
            </p>
        </div>
        </div>

       

      <div className="flex flex-wrap justify-center gap-6 mt-14 text-center">
        {steps.map((step) => (
          <div key={step.number}  className="min-w-[80px]">
            <div onClick={()=>setFilterIndex(step.number)} className={`duration-300 p-2 text-lg font-bold text-black hover:cursor-pointer ${filterIndex == step.number ? 'shadow-2xl shadow-black border-b-1  ': ''}`}>
              <span className="text-xl bg-black inline-block text-white rounded-full w-8 h-fit">{step.number+1}</span> {" "}
              <span  className="text-black text-2xl m-2">{step.label}
              </span>
              
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="px-4 py-2 hover:scale-105 hover:shadow-2xl duration-300 h-[10vh] w-[20vw] text-2xl bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-full">
          Get Started for Free 
        </button>
      </div>
    </section>
  );
}
