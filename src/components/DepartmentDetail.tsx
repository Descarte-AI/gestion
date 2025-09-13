import React from 'react';
import { ArrowLeft, CheckCircle, Star, Users, Award, FileText, MapPin, Calculator, Building2, Scale, Map, FileCheck, CreditCard, Handshake, Network, Shield, TrendingUp, Home, Phone, Mail } from 'lucide-react';
import { DEPARTMENTS } from '../constants';
import { Language } from '../types';
import LanguageSwitcher from './LanguageSwitcher';
import AnimatedBackground from './AnimatedBackground';

interface DepartmentDetailProps {
  departmentId: string;
  onBack: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const DepartmentDetail: React.FC<DepartmentDetailProps> = ({
  departmentId,
  onBack,
  language,
  setLanguage
}) => {
  const department = DEPARTMENTS.find(d => d.id === departmentId);

  if (!department) {
    return null;
  }

  // Define the steps for each department
  const getDepartmentSteps = () => {
    switch (departmentId) {
      case 'land-cadastral':
        return [
          {
            id: 1,
            title: language === 'en' ? 'Document Reception' : 'Réception des Documents',
            description: language === 'en' 
              ? 'Initial reception and verification of client documents at the secretariat'
              : 'Réception initiale et vérification des documents clients au secrétariat',
            icon: FileText,
            color: 'bg-blue-500'
          },
          {
            id: 2,
            title: language === 'en' ? 'Legal Studies' : 'Études Juridiques',
            description: language === 'en'
              ? 'Legal analysis and verification of property rights and documentation'
              : 'Analyse juridique et vérification des droits de propriété et de la documentation',
            icon: Scale,
            color: 'bg-blue-600'
          },
          {
            id: 3,
            title: language === 'en' ? 'Technical Studies' : 'Études Techniques',
            description: language === 'en'
              ? 'Topographic surveys, land measurement and technical assessments'
              : 'Relevés topographiques, mesure des terrains et évaluations techniques',
            icon: Map,
            color: 'bg-green-600'
          },
          {
            id: 4,
            title: language === 'en' ? 'Administrative Procedures' : 'Procédures Administratives',
            description: language === 'en'
              ? 'Processing of administrative formalities and official validations'
              : 'Traitement des formalités administratives et validations officielles',
            icon: FileCheck,
            color: 'bg-amber-600'
          },
          {
            id: 5,
            title: language === 'en' ? 'Final Delivery' : 'Livraison Finale',
            description: language === 'en'
              ? 'Delivery of completed documents and certificates to the client'
              : 'Remise des documents finalisés et certificats au client',
            icon: CheckCircle,
            color: 'bg-green-500'
          }
        ];
      case 'financing':
        return [
          {
            id: 1,
            title: language === 'en' ? 'Project Analysis' : 'Analyse du Projet',
            description: language === 'en'
              ? 'Initial assessment of the project feasibility and financial requirements'
              : 'Évaluation initiale de la faisabilité du projet et des besoins financiers',
            icon: Calculator,
            color: 'bg-orange-500'
          },
          {
            id: 2,
            title: language === 'en' ? 'Financial Engineering' : 'Ingénierie Financière',
            description: language === 'en'
              ? 'Development of financial structure and funding strategy'
              : 'Développement de la structure financière et de la stratégie de financement',
            icon: Building2,
            color: 'bg-orange-600'
          },
          {
            id: 3,
            title: language === 'en' ? 'Partnership Development' : 'Développement de Partenariats',
            description: language === 'en'
              ? 'Identification and negotiation with potential investors and partners'
              : 'Identification et négociation avec les investisseurs et partenaires potentiels',
            icon: Handshake,
            color: 'bg-yellow-600'
          },
          {
            id: 4,
            title: language === 'en' ? 'Technical Coordination' : 'Coordination Technique',
            description: language === 'en'
              ? 'Coordination of technical and administrative aspects of the project'
              : 'Coordination des aspects techniques et administratifs du projet',
            icon: Network,
            color: 'bg-orange-700'
          },
          {
            id: 5,
            title: language === 'en' ? 'Project Implementation' : 'Mise en Œuvre du Projet',
            description: language === 'en'
              ? 'Final implementation and monitoring of the funded project'
              : 'Mise en œuvre finale et suivi du projet financé',
            icon: CheckCircle,
            color: 'bg-green-500'
          }
        ];
      case 'sales-management':
        return [
          {
            id: 1,
            title: language === 'en' ? 'Property Evaluation' : 'Évaluation du Bien',
            description: language === 'en'
              ? 'Professional assessment of property value and market positioning'
              : 'Évaluation professionnelle de la valeur du bien et positionnement marché',
            icon: MapPin,
            color: 'bg-gray-500'
          },
          {
            id: 2,
            title: language === 'en' ? 'Legal Monitoring' : 'Suivi Juridique',
            description: language === 'en'
              ? 'Legal verification and regulatory compliance for the property'
              : 'Vérification juridique et conformité réglementaire du bien',
            icon: Shield,
            color: 'bg-gray-600'
          },
          {
            id: 3,
            title: language === 'en' ? 'Marketing & Sales' : 'Commercialisation',
            description: language === 'en'
              ? 'Marketing strategy implementation and sales network activation'
              : 'Mise en œuvre de la stratégie marketing et activation du réseau de vente',
            icon: TrendingUp,
            color: 'bg-gray-700'
          },
          {
            id: 4,
            title: language === 'en' ? 'Property Management' : 'Gestion Immobilière',
            description: language === 'en'
              ? 'Ongoing property and rental management services'
              : 'Services de gestion immobilière et locative continue',
            icon: Home,
            color: 'bg-gray-600'
          },
          {
            id: 5,
            title: language === 'en' ? 'Transaction Completion' : 'Finalisation Transaction',
            description: language === 'en'
              ? 'Final transaction processing and client handover'
              : 'Traitement final de la transaction et remise au client',
            icon: CheckCircle,
            color: 'bg-green-500'
          }
        ];
      case 'procedures':
        return renderProceduresContent();
      default:
        return [];
    }
  };

  const renderProceduresContent = () => {
    const procedures = [
      {
        title: "Procédure d'obtention d'un titre foncier",
        steps: [
          "Dépôt de la demande avec pièces justificatives",
          "Enquête de commodo et incommodo",
          "Bornage contradictoire du terrain",
          "Établissement du plan cadastral",
          "Délivrance du titre foncier définitif"
        ],
        duration: "3-6 mois",
        cost: "Variable selon la superficie"
      },
      {
        title: "Procédure de régularisation foncière",
        steps: [
          "Constitution du dossier de régularisation",
          "Vérification des droits coutumiers",
          "Délimitation et bornage",
          "Validation par les autorités compétentes",
          "Délivrance du nouveau titre"
        ],
        duration: "4-8 mois",
        cost: "Selon la complexité du dossier"
      },
      {
        title: "Procédure de morcellement",
        steps: [
          "Demande de morcellement avec plan",
          "Étude technique du projet",
          "Approbation du plan de lotissement",
          "Création des nouveaux titres",
          "Attribution des parcelles"
        ],
        duration: "2-4 mois",
        cost: "Forfait + frais par parcelle"
      }
    ];

    return (
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Procédures Administratives
            </span>
          </h2>
          <p className="text-blue-100 text-lg">
            Guide détaillé des procédures foncières et cadastrales
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/30 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">{procedure.title}</h3>
              
              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-semibold text-blue-200">Étapes:</h4>
                <ol className="space-y-2">
                  {procedure.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                        {stepIndex + 1}
                      </div>
                      <span className="text-blue-100 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-white/20 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-blue-200 font-medium">Durée:</span>
                  <span className="text-white">{procedure.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200 font-medium">Coût:</span>
                  <span className="text-white">{procedure.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Documents Required Section */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/30 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Documents Requis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-200 mb-4">Pour les particuliers:</h4>
              <ul className="space-y-2">
                {[
                  "Carte nationale d'identité",
                  "Acte de naissance",
                  "Certificat de résidence",
                  "Plan de situation du terrain",
                  "Attestation villageoise (si applicable)"
                ].map((doc, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-100">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-200 mb-4">Pour les entreprises:</h4>
              <ul className="space-y-2">
                {[
                  "Registre de commerce",
                  "Statuts de la société",
                  "Procès-verbal de nomination",
                  "Attestation fiscale",
                  "Plan cadastral existant"
                ].map((doc, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-100">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin d'assistance ?</h3>
            <p className="text-lg mb-6">Notre équipe d'experts est à votre disposition</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Téléphone</div>
                <div>+237 6XX XXX XXX</div>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Email</div>
                <div>contact@geocasagroup.com</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Adresse</div>
                <div>Yaoundé, Cameroun</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const steps = getDepartmentSteps();

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Language Switcher - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
      </div>

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{language === 'en' ? 'Back' : 'Retour'}</span>
        </button>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-6xl w-full">
          <div className="space-y-16">
            
            {/* Department Header */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-8">
                <div className={`w-24 h-24 ${department.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                  <Building2 className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  {language === 'en' ? department.nameEn : department.nameFr}
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full mx-auto mb-8"></div>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                {language === 'en' ? department.descriptionEn : department.description}
              </p>
            </div>

            {/* Department Image and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Department Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-[3rem] transform rotate-2 scale-105"></div>
                <div className="relative bg-white/10 backdrop-blur-2xl rounded-[3rem] p-8 border border-white/30 shadow-2xl">
                  <img
                    src={department.image}
                    alt={language === 'en' ? department.nameEn : department.nameFr}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="flex items-center justify-center mb-2">
                            <Users className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">50+</div>
                          <div className="text-xs text-gray-600">
                            {language === 'en' ? 'Experts' : 'Experts'}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center mb-2">
                            <Award className="w-5 h-5 text-orange-600" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">15+</div>
                          <div className="text-xs text-gray-600">
                            {language === 'en' ? 'Years' : 'Années'}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center mb-2">
                            <Star className="w-5 h-5 text-yellow-600" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">98%</div>
                          <div className="text-xs text-gray-600">
                            {language === 'en' ? 'Success' : 'Succès'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Services List */}
              <div className="text-white space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {language === 'en' ? 'Our Services' : 'Nos Services'}
                </h3>
                <div className="space-y-4">
                  {department.services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-blue-100 text-lg">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {language === 'en' ? 'Our Process' : 'Notre Processus'}
                  </span>
                </h2>
                <p className="text-blue-100 text-lg">
                  {language === 'en' ? 'Step-by-step approach to excellence' : 'Approche étape par étape vers l\'excellence'}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-4"></div>
              </div>

              {/* Steps Timeline */}
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-white/30 to-white/10"></div>
                    )}
                    
                    <div className="flex items-start space-x-6">
                      {/* Step Icon */}
                      <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1 bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/30 shadow-xl">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{step.id}</span>
                          </div>
                          <h4 className="text-xl font-bold text-white">{step.title}</h4>
                        </div>
                        <p className="text-blue-100 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <button
                onClick={onBack}
                className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center space-x-3 group shadow-xl hover:shadow-2xl transform hover:scale-105 mx-auto"
              >
                <span className="text-lg">
                  {language === 'en' ? 'Get Started' : 'Commencer'}
                </span>
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;