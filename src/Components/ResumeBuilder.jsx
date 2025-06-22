// import React from 'react';

// export default function ResumeBuilder () {
//   const jobDetails = [
//     { key: 'title', text: 'Senior Marketing Manager', icon: '✓', color: 'text-green-400' },
//     { key: 'date', text: '07/2023 - Present' },
//     { key: 'description', text: 'Helped grow awareness and built an inbound marketing strategy that increased website traffic by 25% and lead generation by 50% within the first 6 months.', highlight: true },
//     { key: 'placeholder1', text: '_________________' },
//     { key: 'placeholder2', text: '_________________' },
//   ];

//   const resumeStats = [
//     { label: 'Resume Structure', value: '11 issues' },
//     { label: 'Measurable Results', value: '23 issues' },
//     { label: 'Keyword Usage', value: '6 issues' },
//   ];

//   const personalInfo = {
//     name: 'Tina Miller',
//     contact: 'Miami, Florida - 917-434-3465 - tinamillercy20@gmail.com - Linked',
//     title: 'Global Campaigns Director',
//     description: 'With a total of 15 years of experience in marketing, I have consistent drive and awareness and increase revenue through effective marketing campaigns and increase retention by 25%. At WeWork, led efforts to...',
//     company: 'WeWork - New York, United States',
//     position: 'Senior Marketing Manager',
//   };

//   return (
//     <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto my-4">
//       <div className="bg-teal-700 text-white p-4 w-full md:w-1/4">
//         <div className="flex items-center">
//           <img src="https://via.placeholder.com/40" alt="WeWork Logo" className="mr-2" />
//           <span className="text-xl font-bold">WeWork</span>
//         </div>
//         <ul className="mt-4 space-y-2 text-sm">
//           {jobDetails.map((item) => (
//             <li key={item.key} className="flex items-center">
//               {item.icon && <span className={`mr-2 ${item.color}`}>{item.icon}</span>}
//               {item.highlight ? (
//                 <span className="bg-green-100 text-green-800 p-2 rounded">{item.text}</span>
//               ) : (
//                 item.text
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="p-6 w-full md:w-3/4">
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="mb-4 md:mb-0">
//             <div className="relative w-32 h-32">
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-gray-800">32%</p>
//                 <p className="text-sm text-gray-600">Overall Score</p>
//               </div>
//               <div className="mt-4 space-y-2">
//                 {resumeStats.map((stat, index) => (
//                   <div key={index} className="flex justify-between text-sm">
//                     <span>{stat.label}</span>
//                     <span className="font-semibold">{stat.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="ml-0 md:ml-6">
//             <h2 className="text-xl font-bold">{personalInfo.name}</h2>
//             <p className="text-gray-600 text-sm">{personalInfo.contact}</p>
//             <p className="text-teal-700 font-semibold mt-2">{personalInfo.title}</p>
//             <p className="text-gray-600 mt-2 text-sm">{personalInfo.description}</p>
//             <p className="text-gray-600 mt-2 text-sm">{personalInfo.company}</p>
//             <p className="text-gray-600 mt-2 text-sm">{personalInfo.position}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// components/ExperienceCard.tsx
// ExperienceCard.tsx
import React from "react";
import { CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "WeWork",
    position: "Senior Marketing Manager",
    date: "07/2023 – Present",
    achievement:
      "Helped grow awareness and built an inbound marketing strategy that increased website traffic by 25% and lead generation by 50% within the first 6 months.",
  },
];

export default function ResumeBuilder() {
  return (
    <div className="bg-[#f6fefb] rounded-xl shadow-md p-4 w-full max-w-xl mx-auto border border-gray-200">
      {experiences.map((exp, i) => (
        <div key={i} className="relative">
          <div className="flex items-center space-x-3 mb-2">
            <CheckCircle2 className="text-green-600" size={20} />
            <div className="text-sm text-gray-700 font-medium">
              {exp.achievement}
            </div>
          </div>
          <div className="border-l-4 border-green-600 pl-4 ml-2 mt-4">
            <h2 className="text-green-700 font-semibold text-lg">{exp.company}</h2>
            <p className="text-gray-900 font-medium text-sm">{exp.position}</p>
            <p className="text-gray-500 text-sm">{exp.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

