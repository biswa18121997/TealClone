import  { useState } from "react";

const CoverLetter_Resume_CV = () => {
  const [activeTab, setActiveTab] = useState("Cover Letters");

  const tabs = ["Cover Letters", "Resumes", "CV Samples"];

  const coverLetter = [
    { label: "Customer Service", icon: "fa-user" },
    { label: "Admin Assistant", icon: "fa-building-columns" },
    { label: "DevOps", icon: "fa-right-long" },
    { label: "Product Manager", icon: "fa-briefcase" },
    { label: "Project Manager", icon: "fa-clipboard" },
    { label: "Virtual Assistant", icon: "fa-message" },
    { label: "Data Analyst", icon: "fa-bars" },
    { label: "Business Analyst", icon: "fa-magnifying-glass" },
    { label: "Executive Assistant", icon: "fa-address-card" },
    { label: "Graphic Designer", icon: "fa-pen" },
    { label: "Sales Manager", icon: "fa-building" },
    { label: "Front End Developer", icon: "fa-code" },
    { label: "Human Resources", icon: "fa-building-columns" },
    { label: "Accountant", icon: "fa-dollar-sign" },
    { label: "Student", icon: "fa-graduation-cap" },
    { label: "Social Media Manager", icon: "fa-rocket" },
  ];

  const resumes =  [
    { label: "Admin Assistant", icon: "fa-user-cog" },
    { label: "Student", icon: "fa-user-graduate" },
    { label: "Data Analyst", icon: "fa-chart-bar" },
    { label: "DevOps", icon: "fa-server" },
    { label: "Customer Service", icon: "fa-headset" },
    { label: "Graphic Designer", icon: "fa-paint-brush" },
    { label: "Front End Developer", icon: "fa-code" },
    { label: "Project Manager", icon: "fa-tasks" },
    { label: "Executive Assistant", icon: "fa-user-tie" },
    { label: "Sales Manager", icon: "fa-chart-line" },
    { label: "Virtual Assistant", icon: "fa-laptop-house" },
    { label: "Human Resources", icon: "fa-users" },
    { label: "Business Analyst", icon: "fa-briefcase" },
    { label: "Social Media Manager", icon: "fa-share-alt" },
    { label: "Product Manager", icon: "fa-box-open" },
    { label: "Accountant", icon: "fa-calculator" },
  ];
  const CVSamples =  [
    { label: "Product Manager", icon: "fa-box-open" },
    { label: "Customer Service", icon: "fa-headset" },
    { label: "Student", icon: "fa-user-graduate" },
    { label: "Front End Developer", icon: "fa-code" },
    { label: "Project Manager", icon: "fa-tasks" },
    { label: "Admin Assistant", icon: "fa-user-cog" },
    { label: "Data Analyst", icon: "fa-chart-bar" },
    { label: "Graphic Designer", icon: "fa-paint-brush" },
    { label: "Social Media Manager", icon: "fa-share-alt" },
    { label: "Executive Assistant", icon: "fa-user-tie" },
    { label: "Accountant", icon: "fa-calculator" },
    { label: "Sales Manager", icon: "fa-chart-line" },
    { label: "Virtual Assistant", icon: "fa-laptop-house" },
    { label: "Human Resources", icon: "fa-users" },
    { label: "Business Analyst", icon: "fa-briefcase" },
    { label: "DevOps", icon: "fa-server" },
  ];

  const getActiveList = () => {
    if (activeTab === "Cover Letters") return coverLetter;
    if (activeTab === "Resumes") return resumes;
    return CVSamples;
  };

  return (
    <div className="bg-blue-500 w-full py-10  rounded-t-4xl m-2">
      <div className="text-center text-white space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold">
          Job Winning Cover Letter Examples for 2025
        </h2>
        <p className="text-sm opacity-80">
          2,000+ cover letter samples tailored to specific roles, industries and
          experience levels.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full hover:bg-yellow-300 transition">
          All Cover Letter Examples
        </button>
      </div>

      <div className="flex justify-center gap-6 mt-8 mb-6 text-white text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 pb-1 m-4 transition duration-200 ${
              activeTab === tab
                ? "border-b-4 border-white"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white max-w-6xl mx-auto rounded-[30px] p-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 shadow-md">
        {getActiveList().map((item, index) => (
          <div
            key={index}
            className="border font-bold border-blue-500 text-blue-600 rounded-full px-4 py-4 flex items-center gap-2 justify-center text-sm hover:bg-blue-50 transition-all"
          >
            <i className={`fa ${item.icon}`}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverLetter_Resume_CV;
