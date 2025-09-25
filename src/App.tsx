import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Telemedicine from './components/Telemedicine';
import Emergency from './components/Emergency';
import GovernmentSchemes from './components/GovernmentSchemes';
import Offline from './components/Offline';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard setActiveTab={setActiveTab} />;
      case 'telemedicine':
        return <Telemedicine />;
      case 'emergency':
        return <Emergency />;
      case 'schemes':
        return <GovernmentSchemes />;
      case 'offline':
        return <Offline />;
      default:
        return <Dashboard setActiveTab={setActiveTab} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="pb-4">
          {renderActiveComponent()}
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
