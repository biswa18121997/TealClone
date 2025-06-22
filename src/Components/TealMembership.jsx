export default function TealMembership() {
  const plans = [
    {
      title: "",
      price: "Free ",
      features: [
        "Unlimited Resumes",
        "Unlimited Resume Templates",
        "Unlimited Job Tracking",
        "Top 5 Keywords",
        "1 Email Template Per Job Stage",
        "Limited AI credits",
        "Basic analytics in the resume builder",
        "Basic Job Keyword Matching",
      ],
      color: "bg-gray-100",
      buttonText: "Get Started for Free",
      buttonClass: "bg-yellow-400 text-black",
      noCredit: "",
    },
    {
      title: "teal +",
      price: "$9 / Week",
      features: [
        "Everything in Teal Free",
        "Unlimited Advanced Resume Analysis",
        "Unlimited Resume Keyword Matching",
        "Unlimited keywords (third and soft skills) listed in the job tracker",
        "Unlimited Email Templates",
        "Advanced Design Mode",
        "Premium Resume Templates",
        "Unlimited Interview Practice",
      ],
      color: "bg-teal-600",
      buttonText: "Billed every week, month or quarterly",
      buttonClass: "bg-teal-600 text-white",
      noCredit: "",
    },
  ];

  return (
    <div className="container mx-auto p-4 py-12 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Need to level up your career even faster?</h2>
      <p className="text-gray-600 mb-8">Upgrade to unlock Teal's premium features and turbocharge your job search.</p>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${plan.color} p-6  rounded-lg h-fit shadow-md w-full md:w-1/2 lg:w-1/3 text-left text-black ${index === 0 ? 'text-black' : ''}`}
          >
            <div className="flex justify-start items-center ">
                 <img src="https://cdn.prod.website-files.com/62775a91cc3db44c787149de/62775d8abf9f57629c567a0a_Group%201148.svg" alt="" className="w-1/3 inline mb-6 object-left h-1/4"/>
            <spam className='font-extrabold text-6xl relative bottom-6'>{plan.title.includes('+') ? '+' : '' }</spam>
            </div>
           
          <ul className={`pl-5 mb-6 space-y-4 list-none font-semibold ${plan.price.includes('+') ? 'text-white' : ''}`}>
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`text-sm `}
                >
                  &#10003; {feature}
                </li>
              ))}
          </ul>
            
            {/* <ul className={` pl-5 mb-6 space-y-4 list-none font-semibold `}>
              {plan.features.map((feature, idx) => (
                <li key={idx} className={`text-sm ${plan.price.includes('+') ? 'text-white' : ''}`}>&#10003;  {feature}</li>
              ))}
            </ul> */}
            <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
           
            {plan.noCredit && (
              <p className="text-sm mt-2 text-gray-600">{plan.noCredit}</p>
            )}
          </div>
        ))}
      </div>
       <button
              className={`border-t hover:shadow-2xl rounded-4xl bg-yellow-400 p-4 font-bold hover:opacity-90 transition text-md mt-4 `}
            >
              Get Started for Free <br /><span className="text-xs font-medium">No credit card required, ever</span>
            </button>
    </div>
  );
}