

export default function MatchingMode() {
  const jobDetails = [
    { key: 'title', text: 'Senior Marketing Manager', icon: '✓', color: 'text-green-400' },
    { key: 'date', text: '07/2023 - Present' },
    { key: 'placeholder1', text: '_________________' },
    { key: 'placeholder2', text: '_________________' },
    { key: 'placeholder3', text: '_________________' },
  ];

  const matchDetails = [
    { label: 'Hard Skills', subLabel: 'Marketing', icon: '✓', color: 'text-green-500' },
    { label: 'Events', icon: '●', color: 'text-blue-500' },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto my-4">
      <div className="bg-teal-700 text-white p-4 w-full md:w-1/4">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/40" alt="WeWork Logo" className="mr-2" />
          <span className="text-xl font-bold">WeWork</span>
        </div>
        <ul className="mt-4 space-y-2 text-sm">
          {jobDetails.map((item) => (
            <li key={item.key} className="flex items-center">
              {item.icon && <span className={`mr-2 ${item.color}`}>{item.icon}</span>}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 w-full md:w-3/4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-xl font-bold">Senior Marketing Manager</h2>
            <p className="text-gray-600">Chief - New York, NY</p>
          </div>
          <button className="mt-2 md:mt-0 px-4 py-2 bg-yellow-400 text-white rounded-full hover:bg-yellow-500">
            Switch Job
          </button>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-teal-700">Job Desc</h3>
          <p className="text-gray-600 mt-2">_________________</p>
          <p className="text-gray-600 mt-2">_________________</p>
        </div>
        <div className="mt-4 flex items-center">
          <div className="relative w-32 h-16">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-800">70%</p>
              <p className="text-sm text-gray-600">Good Match Score</p>
            </div>
          </div>
          <div className="ml-4">
            <p className="text-sm text-teal-700 font-semibold">High Prio</p>
            <div className="mt-2">
              {matchDetails.map((item) => (
                <div key={item.label} className="flex items-center mt-1">
                  <span className={`mr-1 ${item.color}`}>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.subLabel && <span className="ml-2">{item.subLabel}</span>}
                </div>
              ))}
              <div className="flex items-center mt-1">
                <input type="checkbox" className="toggle toggle-sm" />
                <span className="ml-2">Highlight</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

