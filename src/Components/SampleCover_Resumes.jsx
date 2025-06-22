import  { useEffect, useState } from "react";

export default function SampleCover_Resumes () {
  const [activeTab, setActiveTab] = useState("Cover Letters");

  // Sample image paths (replace with real URLs or imports)
  const coverLetterContent = {
    heading : 'Professionally Designed Cover Letter Templates',
    subheading : ' 100+ free templates with dozens of different themes and formats.' ,
    buttonText : 'Cover Letter Templatess',
    images : [
        "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/671c29197b865fd5267c4915_Cover-Letter-1.webp",
        "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/671c2a44539d462c90ee826b_Cover-Letter-2.webp",
        "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/671c2b0541ed85af7d2111c0_Cover-Letter-3.webp",
        ]
    
    };

  const resumeContent = {
    heading : 'Professionally Designed Resume Templates',
    subheading : '100+ free templates with dozens of different themes and formats.',
    buttonText : 'Resume Templates',
    images : [
    "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/652fd90a297704eebfb42fef_Resume_Template1.png",
    "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/65424d2b1bc8e928c0782f8c_HOVER.png",
    "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/652fd90ac7ad3609f81595b4_Resume_Template3.png",
  ]
  }
  
useEffect(()=>{
    getActiveImages();
},[activeTab])

  function getActiveImages () {
    return activeTab == "Cover Letters" ? coverLetterContent : resumeContent;
  }

  return (
    <div className="bg-[#FBD45D] py-12 px-4 text-center min-h-screen">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        {getActiveImages().heading}
      </h2>
      <p className="text-gray-700 mt-2 mb-4">
       {getActiveImages().subheading}
      </p>
      <button className="bg-green-900 text-white font-medium px-6 py-2 rounded-full hover:bg-green-800 transition">
        {getActiveImages().buttonText}
      </button>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mt-6 text-sm font-medium text-gray-800">
        {["Resumes", "Cover Letters"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 pb-1 transition duration-300 ${
              activeTab === tab
                ? "border-b-4 border-black font-semibold duration-300"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="flex justify-center flex-wrap gap-6  ">
        {getActiveImages()?.images?.map((src, index) => (
            <div className="group mt-2"> 
            <button className="border bg-yellow-400 p-3 text-sm relative z-20 hidden top-1/2 left-1/4  group-hover:block  rounded-2xl"> Use This Templete</button>
            <img
            key={index}
            src={src}
            alt={`template-${index}`}
            className="w-[25vw] rounded-xl shadow-md bg-white group-hover:blur-xs"
          />

            </div>
         
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center  gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === 1 ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

