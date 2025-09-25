export interface Patient {
  id: string;
  name: string;
  age: number;
  bloodPressure?: string;
  sugarLevel?: string;
  hemoglobin?: string;
  pastHistory?: string;
  symptoms?: string;
}

export interface RiskAssessment {
  level: 'low' | 'high';
  score: number;
  confidence: number;
  recommendations: string[];
}

export interface Hospital {
  id: string;
  name: string;
  distance: string;
  generalBeds: number;
  icuBeds: number;
  maternityBeds: number;
  phone: string;
}

export interface TelemedicineSession {
  id: string;
  patientSymptoms: string;
  doctorResponse?: string;
  prescription?: string;
  timestamp: Date;
}

export type Language = 'en' | 'hi';