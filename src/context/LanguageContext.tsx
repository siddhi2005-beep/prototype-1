import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

const translations: Translations = {
  // Navigation
  dashboard: { en: 'Dashboard', hi: 'डैशबोर्ड' },
  telemedicine: { en: 'Telemedicine', hi: 'टेलीमेडिसिन' },
  emergency: { en: 'Emergency', hi: 'आपातकाल' },
  schemes: { en: 'Gov Schemes', hi: 'सरकारी योजनाएं' },
  offline: { en: 'Offline', hi: 'ऑफलाइन' },
  
  // Dashboard
  welcomeAsha: { en: 'Welcome, ASHA Worker', hi: 'नमस्ते, आशा कार्यकर्ता' },
  voiceInput: { en: 'Tap & Speak Symptoms', hi: 'लक्षण बताएं' },
  manualEntry: { en: 'Manual Entry', hi: 'मैन्युअल एंट्री' },
  bloodPressure: { en: 'Blood Pressure', hi: 'रक्तचाप' },
  sugarLevel: { en: 'Sugar Level', hi: 'शुगर लेवल' },
  hemoglobin: { en: 'Hemoglobin', hi: 'हीमोग्लोबिन' },
  pastHistory: { en: 'Past History', hi: 'पूर्व इतिहास' },
  checkRisk: { en: 'Check Risk', hi: 'जोखिम जांचें' },
  
  // Risk Assessment
  riskAssessment: { en: 'AI Risk Assessment', hi: 'एआई जोखिम मूल्यांकन' },
  lowRisk: { en: 'Low Risk', hi: 'कम जोखिम' },
  highRisk: { en: 'High Risk', hi: 'उच्च जोखिम' },
  confidence: { en: 'Confidence', hi: 'विश्वसनीयता' },
  consultDoctor: { en: 'Consult Doctor', hi: 'डॉक्टर से सलाह लें' },
  
  // Telemedicine
  doctorConsultation: { en: 'Doctor Consultation', hi: 'डॉक्टर परामर्श' },
  patientSymptoms: { en: 'Patient Symptoms', hi: 'रोगी के लक्षण' },
  doctorResponse: { en: 'Doctor Response', hi: 'डॉक्टर का जवाब' },
  downloadPrescription: { en: 'Download Prescription', hi: 'नुस्खा डाउनलोड करें' },
  playVoice: { en: 'Play Voice Response', hi: 'आवाज़ सुनें' },
  
  // Emergency
  emergencyServices: { en: 'Emergency Services', hi: 'आपातकालीन सेवाएं' },
  nearbyHospitals: { en: 'Nearby Hospitals', hi: 'निकटतम अस्पताल' },
  bedAvailability: { en: 'Bed Availability', hi: 'बिस्तर उपलब्धता' },
  bookAmbulance: { en: 'Book Ambulance', hi: 'एम्बुलेंस बुक करें' },
  general: { en: 'General', hi: 'सामान्य' },
  icu: { en: 'ICU', hi: 'आईसीयू' },
  maternity: { en: 'Maternity', hi: 'प्रसूति' },
  
  // Government Schemes
  govSchemes: { en: 'Government Healthcare Schemes', hi: 'सरकारी स्वास्थ्य योजनाएं' },
  ayushmanBharat: { en: 'Ayushman Bharat', hi: 'आयुष्मान भारत' },
  jananiSuraksha: { en: 'Janani Suraksha Yojana', hi: 'जननी सुरक्षा योजना' },
  eSanjeevani: { en: 'eSanjeevani Telemedicine', hi: 'ई-संजीवनी टेलीमेडिसिन' },
  eligible: { en: 'Eligible', hi: 'पात्र' },
  checkEligibility: { en: 'Check Eligibility', hi: 'पात्रता जांचें' },
  
  // Offline
  offlineMode: { en: 'Offline Mode', hi: 'ऑफलाइन मोड' },
  noInternet: { en: 'No Internet - Data Stored Locally', hi: 'इंटरनेट नहीं - डेटा स्थानीय रूप से संग्रहीत' },
  sendSms: { en: 'Send SMS Alert', hi: 'एसएमएस अलर्ट भेजें' },
  emergencyAlert: { en: 'Emergency: High Risk Patient', hi: 'आपातकाल: उच्च जोखिम रोगी' },
  
  // Common
  back: { en: 'Back', hi: 'वापस' },
  next: { en: 'Next', hi: 'अगला' },
  save: { en: 'Save', hi: 'सेव करें' },
  cancel: { en: 'Cancel', hi: 'रद्द करें' },
  loading: { en: 'Loading...', hi: 'लोड हो रहा है...' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};