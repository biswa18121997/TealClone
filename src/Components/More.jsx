import { useState } from "react";

const CareerResourceItem = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center p-3 hover:bg-gray-100 rounded-md transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-lg mr-3">{icon}</span>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const CareerResourcesDropdown = () => {
  const resources = [
    {
      icon: "🏫",
      title: "Career Hub",
      description: "Visit the blog to see job search strategies, resume tips, cover letter tactics, and more insights.",
    },
    {
      icon: "📄",
      title: "Resume Examples",
      description: "2,000+ resume examples and job-specific templates to help your 2025 job search.",
    },
    {
      icon: "📑",
      title: "Cover Letter Examples",
      description: "1,500+ cover letter examples to help you craft a meaningful narrative in your next application.",
    },
    {
      icon: "💻",
      title: "Tech Job Board",
      description: "Millions of jobs, daily updates, and curated job seeker insights to help you find the right role.",
    },
    {
      icon: "📋",
      title: "Resume Templates",
      description: "Hit the ground running with an official Teal resume template designed with best practices.",
    },
    {
      icon: "📝",
      title: "CV Examples",
      description: "Explore 1,500+ CV samples and formatting tips to land your next interview faster.",
    },
    {
      icon: "✉️",
      title: "Cover Letter Templates",
      description: "Choose from over 100 professionally designed cover letter templates for your next application.",
    },
    {
      icon: "🔍",
      title: "Resume Synonyms",
      description: "Use our library of 900+ synonyms to find the perfect words for your next resume.",
    },
    {
      icon: "🌐",
      title: "Career Paths",
      description: "Discover your ideal career path with our in-depth career guides for over 500 roles.",
    },
  ];

  return (
    <div className="absolute bg-white shadow-lg rounded-md py-2 w-80 hidden group-hover:block">
      {resources.map((resource, index) => (
        <CareerResourceItem
          key={index}
          icon={resource.icon}
          title={resource.title}
          description={resource.description}
        />
      ))}
    </div>
  );
};

export default function More() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="absolute group">
      <button
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        onMouseEnter={() => setIsDropdownVisible(true)}
        onMouseLeave={() => setIsDropdownVisible(false)}
        className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
      >
        Career Resources
      </button>
      <CareerResourcesDropdown className={isDropdownVisible ? "block" : "hidden"} />
    </div>
  );
}