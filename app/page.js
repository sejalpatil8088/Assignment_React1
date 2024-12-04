
"use client";

import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import BusinessLinkScreen from './components/BusinessLinkScreen';
import DashboardScreen from './components/DashboardScreen';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => setCurrentScreen((prev) => Math.min(prev + 1, 2));
  const prevScreen = () => setCurrentScreen((prev) => Math.max(prev - 1, 0));

  return (
    <div className="h-screen bg-gray-50">
      {currentScreen === 0 && <WelcomeScreen onNext={nextScreen} />}
      {currentScreen === 1 && <BusinessLinkScreen onNext={nextScreen} onBack={prevScreen} />}
      {currentScreen === 2 && <DashboardScreen />}
    </div>
  );
}



// "use client";

// import { useState } from 'react';
// import   WelcomeScreen  from './components/WelcomeScreen';
// import  BusinessLinkScreen  from './components/BusinessLinkScreen';
// import  DashboardScreen  from './components/DashboardScreen';

// export default function Home() {
//   const [currentScreen, setCurrentScreen] = useState(0);

//   const nextScreen = () => {
//     setCurrentScreen(prev => Math.min(prev + 1, 2));
//   }; 

//   const prevScreen = () => {
//     setCurrentScreen(prev => Math.max(prev - 1, 0));
//   };

//   return (
//     <div className="h-screen bg-gray-50">
//       {currentScreen === 0 && <WelcomeScreen onNext={nextScreen} />}
//       {currentScreen === 1 && <BusinessLinkScreen onNext={nextScreen} onBack={prevScreen} />}
//       {currentScreen === 2 && <DashboardScreen />}
//     </div>
//   );
// }





