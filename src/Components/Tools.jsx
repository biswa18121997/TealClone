// import { useState } from "react";

// const NavItem = ({ icon, title, description }) => {
//   const [isVisible, setIsVisible] = useState(false);
  

//   return (
//     <div className="group-hover:flex items-center p-2 bg-gray-100 rounded-lg mb-2 absolute hidden w-1/2 h-[30vh] group-hover:visible hover:bg-gray-200 top-20">
//       <span className="text-xl mr-2">{icon}</span>
//       <div>
//         <h3 className="font-bold">{title}</h3>
//         <div
//           className={`details bg-white p-2 rounded shadow-md mt-2 absolute z-10 transition-all duration-300 ${
//             isVisible ? 'block' : 'hidden'
//           }`}
//           style={{ width: '200px', left: '0' }}
//         >
//           {description}
//         </div>
//       </div>
//       <button
//         onClick={() => setIsVisible(!isVisible)}
//         onMouseEnter={() => setIsVisible(true)}
//         onMouseLeave={() => setIsVisible(false)}
//         className="ml-auto text-blue-500 hover:text-blue-700"
//       >
//         {isVisible ? '▲' : '▼'}
//       </button>
//     </div>
//   );
// };

// export default function Tools () {
//   return (
//     <div className="container mx-auto p-4 max-w-md">
//       <NavItem
//         icon="📄"
//         title="AI Resume Builder"
//         description="Make your resume stand out by quickly customizing it to each application and applying to more jobs."
//       />
//       <NavItem
//         icon="🚀"
//         title="Job Application Tracker"
//         description="Keep track of your job applications and manage your full job search, all in one place."
//       />
//       <NavItem
//         icon="📊"
//         title="Resume Job Description Match"
//         description="Quickly match and compare your existing resume to the job description of any role for a personalized Match Score."
//       />
//       <NavItem
//         icon="✨"
//         title="Resume Bullet Point Generator"
//         description="Generate metric-focused resume bullet points that highlight your biggest career achievements."
//       />
//       <NavItem
//         icon="✅"
//         title="Resume Checker"
//         description="Quickly check your current resume score to see how it stacks up to the job you're applying to."
//       />
//       <NavItem
//         icon="✍️"
//         title="Cover Letter Generator"
//         description="Accelerate your job search with Tea's AI-powered Cover Letter Generator, write a tailored cover letter in seconds."
//       />
//       <NavItem
//         icon="⭐"
//         title="Resume Summary Generator"
//         description="Take your current resume to the next level and generate a tailored, attention-grabbing summary that makes an impact."
//       />
//       <NavItem
//         icon="🔍"
//         title="See All Tools"
//         description="Explore Tea's full suite of tools."
//       />
//     </div>
//   );
// };


import { useState } from "react";

const NavItem = ({ icon, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex items-center p-2 bg-gray-100 rounded-lg mb-2 relative">
      <span className="text-xl mr-2">{icon}</span>
      <div>
        <h3 className="font-bold">{title}</h3>
        <div
          className={`details bg-white p-2 rounded shadow-md mt-2 absolute z-10 transition-all duration-300 ${
            isVisible ? 'block' : 'hidden'
          }`}
          style={{ width: '200px', left: '0' }}
        >
          {description}
        </div>
      </div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="ml-auto text-blue-500 hover:text-blue-700"
      >
        {isVisible ? '▲' : '▼'}
      </button>
    </div>
  );
};

export default function Tools() {
  const navItems = [
    {
      icon: "📄",
      title: "AI Resume Builder",
      description: "Make your resume stand out by quickly customizing it to each application and applying to more jobs.",
    },
    {
      icon: "🚀",
      title: "Job Application Tracker",
      description: "Keep track of your job applications and manage your full job search, all in one place.",
    },
    {
      icon: "📊",
      title: "Resume Job Description Match",
      description: "Quickly match and compare your existing resume to the job description of any role for a personalized Match Score.",
    },
    {
      icon: "✨",
      title: "Resume Bullet Point Generator",
      description: "Generate metric-focused resume bullet points that highlight your biggest career achievements.",
    },
    {
      icon: "✅",
      title: "Resume Checker",
      description: "Quickly check your current resume score to see how it stacks up to the job you're applying to.",
    },
    {
      icon: "✍️",
      title: "Cover Letter Generator",
      description: "Accelerate your job search with Tea's AI-powered Cover Letter Generator, write a tailored cover letter in seconds.",
    },
    {
      icon: "⭐",
      title: "Resume Summary Generator",
      description: "Take your current resume to the next level and generate a tailored, attention-grabbing summary that makes an impact.",
    },
    {
      icon: "🔍",
      title: "See All Tools",
      description: "Explore Tea's full suite of tools.",
    },
  ];

  return (
    <div className="container md:grid md:grid-cols-3 mx-auto p-4 max-w-md group-hover:flex items-center bg-gray-100 rounded-lg mb-2 absolute left-52 hidden w-1/2 h-[30vh] group-hover:visible hover:bg-gray-200 top-20">
      {navItems.map((item, index) => (
        <NavItem key={index} icon={item.icon} title={item.title} description={item.description} />
      ))}
    </div>
  );
};
