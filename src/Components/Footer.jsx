



const Footer = () => {

    const footerItems = [
  { title: 'Tools', items: ['AI Resume Builder', 'Job Application Tracker', 'Resume Checker', 'Cover Letter Generator', 'Resume Summary Generator', 'Resume Job Description Match', 'Resume Bullet Point Generator'] },
  { title: 'Career Hubs', items: ['Career Hub', 'Career Paths', 'Resume Examples', 'Resume Templates', 'Cover Letter Examples', 'Cover Letter Templates', 'Resume Synonyms', 'CV Examples'] },
  { title: 'Guides', items: ['ChatGPT for Resumes', 'ChatGPT for Cover Letters', 'How to Make a Resume', 'About Me in Resume', 'Resume Summary Examples', 'Resume Skills Section', 'Resume Accomplishments', 'Job Board'] },
  { title: 'Company', items: ['Sign Up', 'Teal+ Pricing', 'Log In', 'How it Works', 'About Us', 'Contact Us', 'Open Positions', 'Affiliate Program'] }
];


 const socialIcons = [
  { icon: 'fa-brands fa-spotify', link: '#' },
  { icon: 'fa-brands fa-linkedin', link: '#' },
  { icon: 'fa-brands fa-youtube', link: '#' },
  { icon: 'fa-brands fa-instagram', link: '#' },
  { icon: 'fa-brands fa-iwitter', link: '#' },
];
  return (
    <footer className="bg-maroon-900 text-maroon-200  font-sans w-full">
      <div className="  p-8 flex flex-wrap justify-between bg-pink-800 rounded-t-4xl w-full">
          <img src="/Screenshot 2025-06-22 092317.png" alt="Teal Labs Logo" className="w-[8vw] h-[12vh] mb-4 rounded-full clip mr-7" />
        {footerItems.map((section, index) => (
          <div key={index} className="mb-6 min-w-[150px] flex-1">
            <h3 className="text-neutral-300 text-xl mb-2">{section.title}</h3>
            <ul className="list-none p-0">
              {section.items.map((item, idx) => (
                <li key={idx} className="mb-2 text-xs text-white"><a href="#" className="text-maroon-200 hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="  border-t border-maroon-700 w-full flex justify-between items-center flex-wrap  pt-4 bg-black rounded-b-2xl text-white">
        <div className="text-xs flex ml-3">
          <p>© 2025 Teal Labs, Inc</p>
          <a href="#" className="text-maroon-200 hover:underline ml-4">Privacy Policy</a>
          <a href="#" className="text-maroon-200 hover:underline ml-4">Terms of Service</a>
        </div>
        <div className="flex space-x-4 p-4  ">
         {socialIcons.map((social, index) => (
        <a key={index} href={social.link} className="text-maroon-200 hover:text-white text-xl">
          <i className={social.icon} />
        </a>
      ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;