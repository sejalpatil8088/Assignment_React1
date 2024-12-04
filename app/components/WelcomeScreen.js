"use client";

export default function WelcomeScreen({ onNext }) {
  return (
    <div className="max-w-md mx-auto h-screen flex flex-col p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-indigo-600 font-semibold">SonicLinker</div>
        <div className="text-gray-400 text-sm">01/06</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        <div className="relative w-64 h-64">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-8 h-8 bg-indigo-100 rounded"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-100"></div>
          <div className="absolute top-1/4 right-0 w-6 h-6 text-indigo-400">⚡</div>
          <div className="absolute bottom-1/4 left-0 w-8 h-8 bg-indigo-100"></div>

          {/* Main card illustration */}
          <div className="absolute inset-1/4 bg-white rounded-lg shadow-lg p-4">
            <div className="w-full space-y-2">
              <div className="flex items-center">
                <div className="text-yellow-400 text-sm">★★★★★</div>
              </div>
              <div className="h-2 bg-gray-100 rounded w-3/4"></div>
              <div className="h-2 bg-gray-100 rounded w-1/2"></div>
              <div className="h-2 bg-gray-100 rounded w-2/3"></div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Get 2x More Customers from Google Reviews.</h1>
          <p className="text-gray-500 text-sm">
            We make it effortless for small businesses like restaurants, salons, and doctors.
          </p>
        </div>

        <div className="text-sm text-gray-500">Join 1,000 businesses growing with us</div>
      </div>

      <button
        onClick={onNext}
        className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto mb-6"
      >
        →
      </button>
    </div>
  );
}



// "use client";

// export default function WelcomeScreen({ onNext }) {
//     return (
//       <div className="max-w-md mx-auto h-screen flex flex-col p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div className="text-indigo-600 font-semibold">SonicLinker</div>
//           <div className="text-gray-400 text-sm">01/06</div>
//         </div>
       
//         <div className="flex-1 flex flex-col items-center justify-center space-y-6">
//           <div className="relative w-64 h-64">
//             {/* Decorative elements */}
//             <div className="absolute top-0 left-0 w-8 h-8 bg-indigo-100 rounded"></div>
//             <div className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-100"></div>
//             <div className="absolute top-1/4 right-0 w-6 h-6 text-indigo-400">⚡</div>
//             <div className="absolute bottom-1/4 left-0 w-8 h-8 bg-indigo-100"></div>
           
//             {/* Main card illustration */}
//             <div className="absolute inset-1/4 bg-white rounded-lg shadow-lg p-4">
//               <div className="w-full space-y-2">
//                 <div className="flex items-center">
//                   <div className="text-yellow-400 text-sm">★★★★★</div>
//                 </div>
//                 <div className="h-2 bg-gray-100 rounded w-3/4"></div>
//                 <div className="h-2 bg-gray-100 rounded w-1/2"></div>
//                 <div className="h-2 bg-gray-100 rounded w-2/3"></div>
//               </div>
//             </div>
//           </div>
  
//           <div className="text-center space-y-4">
//             <h1 className="text-2xl font-bold">
//               Get 2x More Customers from Google Reviews.
//             </h1>
//             <p className="text-gray-500 text-sm">
//               We make it effortless for small businesses like restaurants, salons, and doctors.
//             </p>
//           </div>
  
//           <div className="text-sm text-gray-500">
//             Join 1,000 businesses growing with us
//           </div>
//         </div>
  
//         <button
//           onClick={onNext}
//           className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto mb-6"
//         >
//           →
//         </button>
//       </div>
//     );
//   }