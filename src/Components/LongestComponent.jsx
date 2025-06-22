
import React,{ useEffect } from "react";
import AOS from "aos";



export default function LongestComponent() {




  useEffect(() => {
  AOS.init({ duration: 500 }); 
}, []);
    const features = [
    {
        label: "AI Resume Builder",
        title: "Quickly tailor your resume for each job with AI",
        description:
        "Use the right keywords from job descriptions to highlight your qualifications on your resume. Get recommendations to improve your resume and land more interviews.",
        buttonText: "Build a Resume with AI",
       
        id: "resume",
    },
   
    {
        label: "Job Tracker",
        title: "Keep tabs on all your applications",
        description:
        "Track where you've applied, what stage you're in, and never lose sight of job opportunities.",
        buttonText: "View My Tracker",
       
        id: "tracker",
    },
    {
        label: "AI Resume Builder",
        title: "Quickly tailor your resume for each job with AI",
        description:
        "Use the right keywords from job descriptions to highlight your qualifications on your resume. Get recommendations to improve your resume and land more interviews.",
        buttonText: "Build a Resume with AI",
        
        id: "resume",
    },
   
    {
        label: "Job Tracker",
        title: "Keep tabs on all your applications",
        description:
        "Track where you've applied, what stage you're in, and never lose sight of job opportunities.",
        buttonText: "View My Tracker",
        
        id: "tracker",
    },

];
  return (
    <section className="w-full py-16 px-4 bg-[linear-gradient(to_left,rgb(59,7,0)_40%,white_60%)]">
      <div className="grid md:grid-cols-2 grid-rows-5 gap-6 max-w-6xl mx-auto items-center">
        {features.map((feature) => (
          <React.Fragment key={feature.id}>
            <div className="flex flex-col gap-8">
              <span className="text-lg text-gray-500 uppercase tracking-wide">
                {feature?.label}
              </span>
              <h2 className="text-4xl font-bold text-gray-900">
                {feature?.title}
              </h2>
              <p className="text-gray-600 text-lg font-semibold leading-relaxed">
                {feature?.description}
              </p>
              <button className="w-fit px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold rounded-lg">
                {feature?.buttonText}
              </button>
            </div>
            <div className="relative">
              <div className=" rounded-tl-[80px] rounded-bl-[20px] p-4 md:p-8 shadow-xl">
                <img data-aos='slide-left'
                  src='https://cdn.prod.website-files.com/65cd0cc07eff46d3b1dc4ff3/660ddef70f09d85f799e7ca6_Image1_ResumeBuilder.png'
                  alt={feature?.alt}
                  className="rounded-xl shadow-lg border max-w-full h-auto"
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
