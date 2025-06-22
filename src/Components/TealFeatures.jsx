export default function TealFeatures() {
  const features = [
    {
      title: "AI Resume Builder",
      content: "Google\n- Marketing Director",
      badge: "Enhanced website traffic by 30% in 6 months by implementing a content marketing campaign, resulting in 2M $MOM growth.",
      image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/6719381b50cbddc09fafcd81_Frame%2057832.webp",
      widthClass: "w-48",
    },
    {
      title: "Job Application Tracker",
      content: "Senior Marketing Manager\nAmerican Express - Detroit, MI",
      badge: "Enhanced website traffic by 30% in 6 months by implementing a content marketing campaign, resulting in 2M $MOM growth.",
      image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/67478a7b00a63992bf64d76b_AI-Resume-Builder.png",
      widthClass: "w-48",
    },
    {
      title: "AI Interview Practice",
      content: "Recording\nTranscript\nThank you for coming today. Could you start by telling us a bit about your design process?",
      image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/6622b570233a4d9b83ffba82_Group%2056900.png",
      widthClass: "w-64",
    },
    {
      title: "Resume Job Description Match",
      content: "WeWork\n- Marketing Director\n- Chief - New York, NY\n07/2023 - Present",
      badge: "Good match score",
      image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/67d0cf7db80b08132daa52ee_AI%20Interview%20Agent.webp",
      widthClass: "w-48",
    },
    {
      title: "Resume Summary Generator",
      content: "Tina Miller\nMarketing Director\n7 years of social media experience, driving customer growth and engagement...",
      image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/67193888a29fb06b7adc18f8_Wireframe%20-%201.webp",
      widthClass: "w-48",
    },
    {
      title: "Resume Templates",
      content: "Tina Miller\nMarketing Director...",
      image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/6632782004f88efb1441828d_resume-summary-generator.webp",
      widthClass: "w-64",
    },
    {
      title: "Cover Letter Generator",
      content: "Director, Marketing Operations\nChief - New York, NY",
      image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/6632782c16a4c9f4e9feead5_resume-templates.webp",
      widthClass: "w-48",
    },
    {
      title: "Resume Checker",
      content: "Overall Score\n75%",
      image: "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/6632783ca3fa68d1cfe745be_cover-letter-genrator.webp",
      widthClass: "w-48",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-teal-800 text-center mb-6">Other Teal Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {features.map((item, index) => (
          <div
            key={index}
            className={`bg-teal-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center h-64 ${item.widthClass}`}
          >
            <h3 className="text-lg font-semibold text-teal-800 mb-2">{item.title}</h3>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-24 object-cover mb-2 rounded"
            />
            <p className="text-gray-600 text-sm flex-grow">
              {item.content.split('\n').map((line, idx) => (
                <span key={idx}>{line}<br /></span>
              ))}
            </p>
            {item.badge && (
              <span className="inline-block bg-yellow-300 text-yellow-800 text-xs px-2 py-1 rounded-full mt-2">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}