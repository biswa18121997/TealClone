


export default function () {
  const stages = [
    { name: 'BOOKMARKED', count: 6 },
    { name: 'APPLYING', count: 3 },
    { name: 'APPLIED', count: 7, highlight: true },
    { name: 'INTERVIEWING', count: 3 },
  ];

  const jobData = [
    { position: 'Senior Director, Product Marketing', company: 'Chief', location: 'Miami, FL', status: 'Applied', date: '01/11/2024' },
    { position: '_________________', company: '_________________', location: '_________________', status: 'Applied', date: '_________________' },
    { position: '_________________', company: '_________________', location: '_________________', status: 'Applied', date: '_________________' },
  ];

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex overflow-x-auto space-x-4 pb-2 md:pb-0">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold ${stage.highlight ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {stage.name} <span className="ml-1">{stage.count}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
              <th className="p-2">Job Position</th>
              <th className="p-2">Company</th>
              <th className="p-2">Location</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((job, index) => (
              <tr
                key={index}
                className={`border-t ${index === 0 ? 'bg-blue-100' : ''} hover:bg-gray-50`}
              >
                <td className="p-2">
                  <input type="checkbox" className="mr-2" />
                  {job.position}
                </td>
                <td className="p-2">{job.company}</td>
                <td className="p-2">{job.location}</td>
                <td className="p-2">{job.status}</td>
                <td className="p-2 text-gray-500">{job.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

