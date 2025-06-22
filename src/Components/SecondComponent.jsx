import React, { useState } from "react";

export default function FilterTabs() {

    const tabs = [
        {
            label: "AI Resume Builder",
            icon : "fa-regular fa-newspaper text-blue-500 text-2xl m-1 font-bold",
            
            image: 'https://cdn.prod.website-files.com/62775a91cc3db44c787149de/6626dcd99e5897d6b632e5c6_AI%20RESUME%20BUILDER.webp',
            id: 0,
        },
        {
            label: "Job Tracker",
            icon: 'fas fa-angle-double-right text-green-500',
            image: 'https://cdn.prod.website-files.com/62775a91cc3db44c787149de/6626dcd756c2dda96f10138a_JOBTRACKER.webp',
            id: 1,
        },
        {
            label: "Matching Mode",
            icon : 'fa-regular fa-square-check text-yellow-500',
            image: 'https://cdn.prod.website-files.com/62775a91cc3db44c787149de/6626dcd31448e98cf6d52d9f_MATCHINGMODE.webp',
            id: 2,
        },
];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" flex flex-col justify-center items-center m-2 p-2">
        <section className="w-3/5 flex justify-around  p-2">
            {tabs.map((items)=><button className={`active:caret-yellow-200 px-4 py-2 rounded transition ${activeTab === items.id ? 'bg-neutral-200 text-neutral-700 font-bold underline underline-offset-8' : 'bg-white text-gray-800  '}`} onClick={()=>setActiveTab(items?.id)}><i className={items.icon}></i> {items.label}</button>)}
        </section><br />
        <hr />
   
        <div className="w-full h-1/2">
            <img src={tabs[activeTab]?.image} alt="" />
        </div>

    </div>
  );
}

