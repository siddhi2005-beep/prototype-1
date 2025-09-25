import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { WifiOff, MessageSquare, Database, Send, AlertTriangle } from 'lucide-react';

const Offline: React.FC = () => {
  const { t } = useLanguage();
  const [smsSent, setSmsSent] = useState(false);
  
  const storedData = [
    {
      id: 1,
      timestamp: '10:30 AM',
      patient: 'सुनीता देवी (Sunita Devi)',
      symptoms: 'High BP, Headache',
      risk: 'high'
    },
    {
      id: 2,
      timestamp: '11:45 AM',
      patient: 'प्रिया शर्मा (Priya Sharma)',
      symptoms: 'Regular checkup',
      risk: 'low'
    },
    {
      id: 3,
      timestamp: '2:15 PM',
      patient: 'मीरा पाटील (Meera Patil)',
      symptoms: 'Abdominal pain',
      risk: 'high'
    }
  ];

  const handleSendSMS = () => {
    setSmsSent(true);
    setTimeout(() => setSmsSent(false), 3000);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-orange-500 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <WifiOff className="w-8 h-8" />
          {t('offlineMode')}
        </h2>
        <p className="text-orange-100 mt-2">Continue working without internet</p>
      </div>

      {/* Offline Status */}
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
            <WifiOff className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-red-800">{t('noInternet')}</h3>
            <p className="text-red-600">Data will sync when connection is restored</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Local Storage Active</span>
            </div>
            <div className="text-sm text-gray-500">3 records pending sync</div>
          </div>
        </div>
      </div>

      {/* Emergency SMS Alert */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-orange-600" />
          Emergency SMS Alert
        </h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-red-800">High Risk Patient Detected</p>
                <p className="text-red-600 text-sm mt-1">
                  Patient: सुनीता देवी • BP: 160/100 • Symptoms: Severe headache, vision problems
                </p>
              </div>
            </div>
          </div>

          {smsSent ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                <Send className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg font-semibold text-green-600">SMS Alert Sent!</p>
              <p className="text-gray-600 text-sm">Emergency services notified</p>
            </div>
          ) : (
            <button
              onClick={handleSendSMS}
              className="w-full bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold py-4 rounded-2xl text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-6 h-6" />
              {t('sendSms')}
            </button>
          )}
        </div>
      </div>

      {/* Stored Data */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          Locally Stored Records
        </h3>
        
        <div className="space-y-3">
          {storedData.map((record) => (
            <div key={record.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800">{record.patient}</span>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    record.risk === 'high' ? 'bg-red-500' : 'bg-green-500'
                  }`} />
                  <span className="text-xs text-gray-500">{record.timestamp}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{record.symptoms}</p>
              <div className="flex items-center gap-2 mt-2">
                <Database className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-blue-600">Stored locally - Ready to sync</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sync Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">When Internet Returns</h3>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
            <p className="text-blue-700 text-sm">All data will automatically sync to the server</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
            <p className="text-blue-700 text-sm">Telemedicine consultations will be available</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
            <p className="text-blue-700 text-sm">Real-time emergency services will activate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offline;