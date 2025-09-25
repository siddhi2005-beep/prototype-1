import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Home, 
  Video, 
  AlertTriangle, 
  FileText, 
  WifiOff,
  Globe,
  Stethoscope
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'dashboard', icon: Home, label: t('dashboard') },
    { id: 'telemedicine', icon: Video, label: t('telemedicine') },
    { id: 'emergency', icon: AlertTriangle, label: t('emergency') },
    { id: 'schemes', icon: FileText, label: t('schemes') },
    { id: 'offline', icon: WifiOff, label: t('offline') },
  ];

  return (
    <div className="bg-white shadow-lg">
      {/* Top Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">NeoCare</h1>
        </div>
        
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 p-4 min-w-0 flex-1 ${
                activeTab === item.id
                  ? 'text-emerald-600 bg-emerald-50 border-b-2 border-emerald-600'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
              } transition-all duration-200`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;