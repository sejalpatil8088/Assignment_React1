"use client";

export default function DashboardScreen() {
  const metrics = [
    { label: "Interactions", value: "231", change: "+12%", icon: "↗" },
    { label: "Views", value: "111", change: "-3%", icon: "👁" },
    { label: "Searches", value: "23", change: "+18%", icon: "🔍" },
    { label: "Bookings", value: "14", change: "+10%", icon: "📅" },
    { label: "Directions", value: "10", change: "-3%", icon: "🗺" },
    { label: "Website Clicks", value: "7", change: "-1%", icon: "🌐" },
  ];

  const keywords = [
    "Japanese food near me",
    "Best Asian restaurant near me",
    "Affordable sushi places near me",
    "Top-rated ramen spots nearby",
  ];

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-indigo-600 font-semibold">SonicLinker</div>
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">{metric.label}</span>
              <span aria-label={`Metric Icon for ${metric.label}`}>{metric.icon}</span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">{metric.value}</span>
              <span
                className={`text-sm ${
                  metric.change.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Actions Section */}
      <div>
        <h3 className="text-gray-700 font-medium mb-4">Recommended Actions</h3>
        <div className="bg-white p-4 rounded-lg mb-6">
          <div className="font-medium mb-2">Get More Reviews</div>
          <div className="text-sm text-gray-500 mb-4">
            Share your GBP link with your customers
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-400 text-sm truncate flex-1">
              https://njenwi.jkZeejknweelhow...
            </div>
            <button
              className="w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center ml-2"
              aria-label="Options"
            >
              ⋮
            </button>
          </div>
        </div>
      </div>

      {/* Keywords Section */}
      <div>
        <h3 className="text-gray-700 font-medium mb-4">Choose Keywords to Rank Better On</h3>
        <div className="space-y-3">
          {keywords.map((keyword, index) => (
            <div key={index} className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600"
                aria-label={`Select keyword: ${keyword}`}
              />
              <span className="text-sm text-gray-700">{keyword}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



// "use client";

// export default function DashboardScreen() {
//     const metrics = [
//       { label: 'Interactions', value: '231', change: '+12%', icon: '↗' },
//       { label: 'Views', value: '111', change: '-3%', icon: '👁' },
//       { label: 'Searches', value: '23', change: '+18%', icon: '🔍' },
//       { label: 'Bookings', value: '14', change: '+10%', icon: '📅' },
//       { label: 'Directions', value: '10', change: '-3%', icon: '🗺' },
//       { label: 'Website Clicks', value: '7', change: '-1%', icon: '🌐' }
//     ];
  
//     const keywords = [
//       'Japanese food near me',
//       'Best asian restaurant near me',
//       'Best asian restaurant near me',
//       'Best asian restaurant near me'
//     ];
  
//     return (
//       <div className="max-w-md mx-auto min-h-screen bg-gray-50 p-6">
//         <div className="flex items-center justify-between mb-8">
//           <div className="text-indigo-600 font-semibold">SonicLinker</div>
//           <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
//         </div>
  
//         <div className="grid grid-cols-2 gap-4 mb-8">
//           {metrics.map((metric, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-gray-600">{metric.label}</span>
//                 <span>{metric.icon}</span>
//               </div>
//               <div className="flex items-baseline space-x-2">
//                 <span className="text-2xl font-bold">{metric.value}</span>
//                 <span className={`text-sm ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
//                   {metric.change}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
  
//         <div className="space-y-6">
//           <div>
//             <h3 className="text-gray-700 font-medium mb-4">Recommended actions</h3>
//             <div className="bg-white p-4 rounded-lg mb-4">
//               <div className="font-medium mb-2">Get more reviews</div>
//               <div className="text-sm text-gray-500 mb-4">Share your GBP link with your customers</div>
//               <div className="flex items-center justify-between">
//                 <div className="text-gray-400 text-sm truncate flex-1">
//                   https://njenwi.jkZeejknweelhow...
//                 </div>
//                 <button className="w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center ml-2">
//                   ⋮
//                 </button>
//               </div>
//             </div>
//           </div>
  
//           <div>
//             <h3 className="text-gray-700 font-medium mb-4">Choose keywords to rank better on</h3>
//             <div className="space-y-3">
//               {keywords.map((keyword, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <input type="checkbox" className="w-4 h-4 text-indigo-600" />
//                   <span className="text-sm text-gray-700">{keyword}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }