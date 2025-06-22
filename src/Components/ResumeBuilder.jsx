
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

