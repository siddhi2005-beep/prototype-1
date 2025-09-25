import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Ambulance, MapPin, Phone, Bed, Clock } from 'lucide-react';
import type { Hospital } from '../types';

const Emergency: React.FC = () => {
  const { t } = useLanguage();
  const [ambulanceBooked, setAmbulanceBooked] = useState(false);
  
  const hospitals: Hospital[] = [
    {
      id: '1',
      name: 'District Hospital Rajpur',
      distance: '2.3 km',
      generalBeds: 5,
      icuBeds: 2,
      maternityBeds: 8,
      phone: '+91-9876543210'
    },
    {
      id: '2',
      name: 'Community Health Center',
      distance: '4.7 km',
      generalBeds: 12,
      icuBeds: 0,
      maternityBeds: 4,
      phone: '+91-9876543211'
    },
    {
      id: '3',
      name: 'Primary Health Center',
      distance: '6.1 km',
      generalBeds: 8,
      icuBeds: 1,
      maternityBeds: 6,
      phone: '+91-9876543212'
    }
  ];

  const handleBookAmbulance = () => {
    setAmbulanceBooked(true);
    // Simulate ambulance booking
    setTimeout(() => {
      setAmbulanceBooked(false);
    }, 5000);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-red-500 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Ambulance className="w-8 h-8" />
          {t('emergencyServices')}
        </h2>
        <p className="text-red-100 mt-2">24/7 emergency medical support</p>
      </div>

      {/* Emergency Ambulance Section */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
          <Ambulance className="w-6 h-6" />
          Emergency Ambulance
        </h3>
        
        {ambulanceBooked ? (
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center animate-bounce">
              <Ambulance className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-green-600">Ambulance Booked!</p>
              <p className="text-gray-600">ETA: 8-12 minutes</p>
              <p className="text-sm text-gray-500">Driver: राम कुमार (Ram Kumar) • +91-9876543220</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">GPS Tracking Active • Live location shared</p>
            </div>
          </div>
        ) : (
          <button
            onClick={handleBookAmbulance}
            className="w-full bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold py-6 rounded-2xl text-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Ambulance className="w-8 h-8" />
            {t('bookAmbulance')}
          </button>
        )}
      </div>

      {/* Nearby Hospitals */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-600" />
          {t('nearbyHospitals')}
        </h3>
        
        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{hospital.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{hospital.distance}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>15-20 min</span>
                  </div>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm font-medium text-gray-700 mb-2">{t('bedAvailability')}</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Bed className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-600">{t('general')}</span>
                    </div>
                    <div className={`text-lg font-bold ${hospital.generalBeds > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {hospital.generalBeds}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Bed className="w-4 h-4 text-red-600" />
                      <span className="text-xs text-gray-600">{t('icu')}</span>
                    </div>
                    <div className={`text-lg font-bold ${hospital.icuBeds > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {hospital.icuBeds}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Bed className="w-4 h-4 text-pink-600" />
                      <span className="text-xs text-gray-600">{t('maternity')}</span>
                    </div>
                    <div className={`text-lg font-bold ${hospital.maternityBeds > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {hospital.maternityBeds}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GPS Map Mock */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Live GPS Tracking</h3>
        <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M10,50 Q30,30 50,50 T90,50" stroke="#3B82F6" strokeWidth="0.5" fill="none" />
              <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke="#10B981" strokeWidth="0.3" fill="none" />
            </svg>
          </div>
          <div className="text-center z-10">
            <MapPin className="w-12 h-12 text-red-500 mx-auto mb-2 animate-bounce" />
            <p className="text-gray-600 font-medium">Current Location</p>
            <p className="text-sm text-gray-500">Rajpur Village, Haryana</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;