import React from "react";



export default function Review () {
    const testimonials = [
  {
    name: "Gratshan Burgholar",
    title: "Customer Success Manager",
    content:
      "This has been really helpful, in application and my mental peace...mainly with the tedium of submitting and following up job applications. Think of this as a contact manager, CRM, resume–building tool, and cover letter generator all in one place.",
    highlight: true,
    image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/67200086e79996fe24cb7e57_Gretchen.webp",
  },
  {
    name: "Alin Florea",
    title: "Director of Operations",
    content:
      "Incredible tool. For everyone who wants to keep everything in one place, this is a HUGE HELP to stay organized and land a job faster.",
    image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/6720029ac420cfdd9b9a5687_Alin.webp",
  },
  {
    name: "Brittany Archard",
    title: "Manager II, Enablement",
    content:
      "This tool makes it so easy for me to track my applications, write cover letters, and align all of my resumes to the specific keywords in the job descriptions. A must-have for the job hunt!",
    image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/6720030b295d7baf98495684_Brittany.webp",
  },
  {
    name: "Meg Thomas",
    title: "Business Strategy & Operations Leader",
    content:
      "Amazing resource for organizing your job search and doing both easy and advanced customization of your resume. It even drafts cover letters for you.",
    image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/66e32a22edc206ef083330c9_Avatar%20Image-2.png",
  },
  {
    name: "Therese Sollars",
    title: "Director, Internal Communications",
    content:
      "Being able to build an incredibly relevant resume for every job has been a pipe dream until Teal. Its AI-enabled cover letters are excellent too (and that’s coming from a comms person).",
    image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/672003d60a1c2095e50abbba_Therese.webp",
  },
  {
    name: "Billy Lechert",
    title: "Head of Workplace",
    content:
      "This has been a really valuable tool for job research and resume/cover letter writing! It's use of AI is really forward-thinking and speeds up the job application process.",
    image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/672004b2a36e8f9fa090d791_Billy.webp",
  },
  {
    name: "Janice Simpson",
    title: "Treatment Specialist",
    content:
      "Teal is absolutely amazing! I can customize resumes and cover letters in no time that look highly professional and specific to the job. Teal is a must to install as a Chrome Extension.",
    image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/672005797586473b9caa4769_Janice.webp",
  },
  {
    name: "Allie Jacobs",
    title: "Senior Product Designer",
    content:
      "Very helpful to be able to save jobs across different job board sites! It makes it so much easier to tailor a resume to a job when you can see both side by side.",
    image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/672005fd5b9698d1edcc0bd8_Allie.webp",
  },
  {
    name: "Roger McClung",
    title: "Director, Global Operations",
    content:
      "A great tool for creating targeted resumes that align well with the job posting. The app within job search sites works great. I can quickly save, capture key information, and rate a job. Then easily work within the tool to create my resume and track my progress with the company I have applied to.",
    image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/672006bdadb68506be19dcb7_Roger.webp",
  },
];



  return (
    <section className="py-16 px-4 text-center bg-white">
        <h1 className="text-4xl md:text-3xl font-bold text-green-900 mb-2">The most effective strategy for your job search</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-2">
        Loved by over 2 million members
      </h2>
      <p className="text-gray-800 font-medium mb-6">
        Rated over <span className="font-bold">4.4 on</span>{" "}
        <span className="text-black">★ Trustpilot</span>
      </p>

      {/* Highlighted Review */}
      <div className=" justify-between items-center flex w-[90vw] mx-auto p-16 bg-green-900 text-white md:p-10 rounded-lg mb-12 relative">
        <div className="text-xl font-medium p-10 w-4/5 ">
          {
            testimonials.find((t) => t.highlight)?.content
          }
        </div>
        <div className="flex flex-col items-center justify-end gap-3 mt-4 w-1/5">
        <section className="text-yellow-300">
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
        </section>
        <img
            src={testimonials.find((t) => t.highlight)?.image}
            alt="reviewer"
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <div className="text-right">
            <h4 className="font-semibold">
              {testimonials.find((t) => t.highlight)?.name}
            </h4>
            <p className="text-sm opacity-90">
              {testimonials.find((t) => t.highlight)?.title}
            </p>
          </div>
          
        </div>
      </div>

      {/* Grid of Other Reviews */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
        {testimonials
          .filter((t) => !t.highlight)
          .map((review, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl text-left shadow-sm"
            >
              <div className="text-yellow-500 mb-2 text-sm">★★★★★</div>
              <p className="text-gray-700 mb-4 text-sm">{review.content}</p>
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-sm font-semibold">{review.name}</h4>
                  <p className="text-xs text-gray-600">{review.title}</p>
                </div>
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>
          ))}
      </div>

      {/* CTA Button */}
      <button className="mt-10 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-full font-semibold shadow-md">
        Upload Your Resume Now
      </button>
    </section>
  );
};

