import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mic, User, Activity, TrendingUp, AlertCircle } from 'lucide-react';
import type { Patient, RiskAssessment } from '../types';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const { t } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);
  const [patient, setPatient] = useState<Patient>({
    id: '1',
    name: '',
    age: 0,
  });
  const [riskAssessment, setRiskAssessment] = useState<RiskAssessment | null>(null);

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // Simulate voice input
    setTimeout(() => {
      setIsRecording(false);
      setPatient(prev => ({
        ...prev,
        symptoms: 'पेट में दर्द, सिरदर्द, चक्कर आना (Stomach pain, headache, dizziness)'
      }));
    }, 3000);
  };

  const handleRiskCheck = () => {
    // Simulate AI risk assessment
    const riskLevel = Math.random() > 0.5 ? 'high' : 'low';
    const assessment: RiskAssessment = {
      level: riskLevel,
      score: riskLevel === 'high' ? 85 : 25,
      confidence: 92,
      recommendations: riskLevel === 'high' 
        ? ['Immediate medical attention required', 'Monitor blood pressure closely', 'Consider hospitalization']
        : ['Regular checkups recommended', 'Maintain healthy diet', 'Light exercise as advised']
    };
    setRiskAssessment(assessment);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{t('welcomeAsha')}</h2>
            <p className="text-emerald-100 mt-1">Ready to help mothers today</p>
          </div>
        </div>
      </div>

      {/* Voice Input Section */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Mic className="w-5 h-5 text-emerald-600" />
          {t('voiceInput')}
        </h3>
        
        <button
          onClick={handleVoiceInput}
          className={`w-full h-24 rounded-2xl flex items-center justify-center gap-3 text-white font-semibold text-lg transition-all duration-300 ${
            isRecording 
              ? 'bg-red-500 animate-pulse' 
              : 'bg-emerald-500 hover:bg-emerald-600 active:scale-95'
          }`}
        >
          <Mic className={`w-8 h-8 ${isRecording ? 'animate-bounce' : ''}`} />
          {isRecording ? 'Recording...' : t('voiceInput')}
        </button>

        {patient.symptoms && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Recorded Symptoms:</p>
            <p className="text-gray-800 font-medium">{patient.symptoms}</p>
          </div>
        )}
      </div>

      {/* Manual Entry Section */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-600" />
          {t('manualEntry')}
        </h3>
        
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('bloodPressure')} (mmHg)
            </label>
            <input
              type="text"
              placeholder="120/80"
              value={patient.bloodPressure || ''}
              onChange={(e) => setPatient(prev => ({ ...prev, bloodPressure: e.target.value }))}
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('sugarLevel')} (mg/dL)
            </label>
            <input
              type="text"
              placeholder="100"
              value={patient.sugarLevel || ''}
              onChange={(e) => setPatient(prev => ({ ...prev, sugarLevel: e.target.value }))}
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('hemoglobin')} (g/dL)
            </label>
            <input
              type="text"
              placeholder="12.5"
              value={patient.hemoglobin || ''}
              onChange={(e) => setPatient(prev => ({ ...prev, hemoglobin: e.target.value }))}
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Risk Check Button */}
      <button
        onClick={handleRiskCheck}
        className="w-full bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold py-4 rounded-2xl text-lg transition-all duration-300 flex items-center justify-center gap-3"
      >
        <TrendingUp className="w-6 h-6" />
        {t('checkRisk')}
      </button>

      {/* Risk Assessment Results */}
      {riskAssessment && (
        <div className={`rounded-2xl p-6 ${
          riskAssessment.level === 'high' 
            ? 'bg-red-50 border-2 border-red-200' 
            : 'bg-green-50 border-2 border-green-200'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              riskAssessment.level === 'high' ? 'bg-red-500' : 'bg-green-500'
            }`}>
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${
                riskAssessment.level === 'high' ? 'text-red-800' : 'text-green-800'
              }`}>
                {t(riskAssessment.level === 'high' ? 'highRisk' : 'lowRisk')}
              </h3>
              <p className="text-gray-600">
                Score: {riskAssessment.score}% • {t('confidence')}: {riskAssessment.confidence}%
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            {riskAssessment.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  riskAssessment.level === 'high' ? 'bg-red-500' : 'bg-green-500'
                }`} />
                <p className="text-gray-700">{rec}</p>
              </div>
            ))}
          </div>

          {riskAssessment.level === 'high' && (
            <button
              onClick={() => setActiveTab('telemedicine')}
              className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {t('consultDoctor')}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;