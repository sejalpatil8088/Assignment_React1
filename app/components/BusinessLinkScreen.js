"use client";

export default function BusinessLinkScreen({ onNext, onBack }) {
  return (
    <div className="max-w-md mx-auto h-screen flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-2xl font-semibold">Link Your Google Business</div>
        <div className="text-gray-400 text-sm">02/06</div>
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search your business..."
          className="w-full p-4 bg-gray-50 rounded-lg pl-10"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-4 h-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label="Search Icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Business Card */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
          <div>
            <div className="font-medium">ElemenOPillows</div>
            <div className="text-sm text-gray-500">USA</div>
          </div>
        </div>
        <div
          className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white"
          aria-label="Business Selected"
        >
          ✓
        </div>
      </div>

      {/* Links and Suggestions */}
      <div className="text-center text-sm text-gray-600">
        <p>
          Don&apos;t have a Google Business account?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Click here
          </a>{" "}
          to set it up. Not able to find your business?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Try this!
          </a>
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-auto">
        <button
          onClick={onBack}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"
          aria-label="Go Back"
        >
          ←
        </button>
        <button
          onClick={onNext}
          className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center"
          aria-label="Go Forward"
        >
          →
        </button>
      </div>
    </div>
  );
}




// "use client";

// export default function BusinessLinkScreen({ onNext, onBack }) {
//     return (
//       <div className="max-w-md mx-auto h-screen flex flex-col p-6">
//         <div className="flex items-center justify-between mb-8">
//           <div className="text-2xl font-semibold">Link Your Google Business</div>
//           <div className="text-gray-400 text-sm">02/06</div>
//         </div>
  
//         <div className="relative mb-6">
//           <input
//             type="text"
//             placeholder="Search your business..."
//             className="w-full p-4 bg-gray-50 rounded-lg"
//           />
//           <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
//             <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//         </div>
  
//         <div className="flex items-center justify-between p-4 bg-white rounded-lg mb-6">
//           <div className="flex items-center space-x-4">
//             <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
//             <div>
//               <div className="font-medium">ElemenOPillows</div>
//               <div className="text-sm text-gray-500">USA</div>
//             </div>
//           </div>
//           <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white">
//             ✓
//           </div>
//         </div>
  
//         <div className="text-center text-sm text-gray-600">
//           <span>Don't have a Google Business account? </span>
//           <a href="#" className="text-indigo-600">Click here</a>
//           <span> to set it up. Not able to find your business, </span>
//           <a href="#" className="text-indigo-600">try this!</a>
//         </div>
  
//         <div className="flex justify-between mt-auto">
//           <button
//             onClick={onBack}
//             className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"
//           >
//             ←
//           </button>
//           <button
//             onClick={onNext}
//             className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     );
//   }