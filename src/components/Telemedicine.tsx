import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Video, Download, Play, User, MessageSquare } from 'lucide-react';
import type { TelemedicineSession } from '../types';

const Telemedicine: React.FC = () => {
  const { t } = useLanguage();
  const [session, setSession] = useState<TelemedicineSession>({
    id: '1',
    patientSymptoms: 'पेट में तेज़ दर्द, सिरदर्द, चक्कर आना। BP: 140/90, Sugar: 180 mg/dL (Severe stomach pain, headache, dizziness. BP: 140/90, Sugar: 180 mg/dL)',
    doctorResponse: 'Based on the symptoms and vitals, this appears to be gestational hypertension with possible pre-eclampsia. Immediate monitoring required.',
    prescription: 'Rest, low sodium diet, BP monitoring every 4 hours, follow-up in 24 hours',
    timestamp: new Date()
  });
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  const handlePlayVoice = () => {
    // Simulate text-to-speech
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(session.doctorResponse || '');
      utterance.lang = 'hi-IN';
      speechSynthesis.speak(utterance);
    }
  };

  const handleDownloadPrescription = () => {
    // Simulate prescription download
    const prescriptionContent = `
PRESCRIPTION
-----------
Date: ${new Date().toLocaleDateString()}
Patient Symptoms: ${session.patientSymptoms}
Doctor's Assessment: ${session.doctorResponse}
Prescription: ${session.prescription}
    `;
    
    const blob = new Blob([prescriptionContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'prescription.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-blue-500 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Video className="w-8 h-8" />
          {t('doctorConsultation')}
        </h2>
        <p className="text-blue-100 mt-2">Connect with specialist doctors instantly</p>
      </div>

      {/* Connection Status */}
      <div className={`rounded-2xl p-4 border-2 ${
        isConnected 
          ? 'bg-green-50 border-green-200' 
          : 'bg-orange-50 border-orange-200'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded-full ${
              isConnected ? 'bg-green-500 animate-pulse' : 'bg-orange-500'
            }`} />
            <span className="font-medium">
              {isConnected ? 'Connected to Dr. Sharma' : 'Ready to connect'}
            </span>
          </div>
          <button
            onClick={handleConnect}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              isConnected 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isConnected ? 'End Call' : 'Connect Now'}
          </button>
        </div>
      </div>

      {/* Patient Symptoms */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-600" />
          {t('patientSymptoms')}
        </h3>
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-gray-800 leading-relaxed">{session.patientSymptoms}</p>
        </div>
      </div>

      {/* Doctor Response */}
      {session.doctorResponse && (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-green-600" />
            {t('doctorResponse')}
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dr. Priya Sharma</p>
                  <p className="text-sm text-gray-600">Gynecologist</p>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed">{session.doctorResponse}</p>
            </div>

            {session.prescription && (
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-800 mb-2">Prescription:</h4>
                <p className="text-gray-700">{session.prescription}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePlayVoice}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Play className="w-5 h-5" />
                {t('playVoice')}
              </button>
              
              <button
                onClick={handleDownloadPrescription}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-5 h-5" />
                {t('downloadPrescription')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-colors">
          Schedule Follow-up
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 rounded-xl transition-colors">
          Medical History
        </button>
      </div>
    </div>
  );
};

export default Telemedicine;