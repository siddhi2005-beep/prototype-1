import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Heart, Smartphone, CheckCircle, ExternalLink } from 'lucide-react';

const GovernmentSchemes: React.FC = () => {
  const { t } = useLanguage();

  const schemes = [
    {
      id: 'ayushman',
      name: t('ayushmanBharat'),
      description: 'Free health insurance coverage up to ₹5 lakh per family per year',
      descriptionHi: 'प्रति परिवार प्रति वर्ष ₹5 लाख तक मुफ्त स्वास्थ्य बीमा कवरेज',
      icon: Shield,
      color: 'bg-blue-500',
      status: 'eligible',
      benefits: [
        'Cashless treatment in empaneled hospitals',
        'Pre and post hospitalization coverage',
        'Maternity benefits included'
      ]
    },
    {
      id: 'janani',
      name: t('jananiSuraksha'),
      description: 'Cash assistance for institutional delivery and antenatal care',
      descriptionHi: 'संस्थागत प्रसव और प्रसव पूर्व देखभाल के लिए नकद सहायता',
      icon: Heart,
      color: 'bg-pink-500',
      status: 'eligible',
      benefits: [
        '₹1,400 for rural area delivery',
        'Free transportation allowance',
        'ASHA worker incentive'
      ]
    },
    {
      id: 'esanjeevani',
      name: t('eSanjeevani'),
      description: 'Free telemedicine consultation platform',
      descriptionHi: 'मुफ्त टेलीमेडिसिन परामर्श प्लेटफॉर्म',
      icon: Smartphone,
      color: 'bg-emerald-500',
      status: 'active',
      benefits: [
        '24/7 doctor consultation',
        'Prescription download',
        'Multi-language support'
      ]
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold">{t('govSchemes')}</h2>
        <p className="text-purple-100 mt-2">Access government healthcare benefits</p>
      </div>

      {/* Schemes List */}
      <div className="space-y-4">
        {schemes.map((scheme) => {
          const Icon = scheme.icon;
          return (
            <div key={scheme.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 ${scheme.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{scheme.name}</h3>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium text-green-600">
                        {t('eligible')}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {scheme.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-gray-700">Key Benefits:</p>
                    <ul className="space-y-1">
                      {scheme.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg text-sm transition-colors flex items-center gap-2">
                      {t('checkEligibility')}
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Benefits Status</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">₹5,00,000</div>
            <p className="text-sm text-gray-600">Available Coverage</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">₹1,400</div>
            <p className="text-sm text-gray-600">Delivery Incentive</p>
          </div>
        </div>
      </div>

      {/* Help & Support */}
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-orange-800 mb-2">Need Help?</h3>
        <p className="text-orange-700 text-sm mb-4">
          Contact your nearest ASHA worker or call the helpline for assistance with scheme applications.
        </p>
        <div className="flex gap-3">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors">
            Call Helpline
          </button>
          <button className="border border-orange-500 text-orange-600 hover:bg-orange-50 font-medium py-2 px-4 rounded-lg text-sm transition-colors">
            Find ASHA Worker
          </button>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;