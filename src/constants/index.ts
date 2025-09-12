import { Department, CompanyInfo, Bureau } from '../types';
import { Division } from '../types';

export const BUREAUS: { [key: string]: Bureau[] } = {
  'land-cadastral': [
    {
      id: 'legal-studies',
      name: 'Bureau Études Juridiques et Conseil Fonciers',
      nameEn: 'Legal Studies and Land Advisory Office',
      nameFr: 'Bureau Études Juridiques et Conseil Fonciers',
      color: 'bg-blue-600',
      icon: 'Scale'
    },
    {
      id: 'technical-studies',
      name: 'Bureau Études Techniques et Topographiques',
      nameEn: 'Technical and Topographic Studies Office',
      nameFr: 'Bureau Études Techniques et Topographiques',
      color: 'bg-blue-500',
      icon: 'Map'
    },
    {
      id: 'administrative-procedures',
      name: 'Bureau Procédures à Suivre Administratives',
      nameEn: 'Administrative Procedures Office',
      nameFr: 'Bureau Procédures à Suivre Administratives',
      color: 'bg-blue-700',
      icon: 'FileCheck'
    }
  ],
  'financing': [
    {
      id: 'financial-engineering',
      name: 'Bureau Montage Financier et Ingénierie de Projet',
      nameEn: 'Financial Engineering and Project Management Office',
      nameFr: 'Bureau Montage Financier et Ingénierie de Projet',
      color: 'bg-orange-600',
      icon: 'Calculator'
    },
    {
      id: 'partnerships',
      name: 'Bureau Partenariat Apport et Suivi Investisseur',
      nameEn: 'Partnership and Investor Relations Office',
      nameFr: 'Bureau Partenariat Apport et Suivi Investisseur',
      color: 'bg-orange-500',
      icon: 'Handshake'
    },
    {
      id: 'coordination',
      name: 'Bureau Coordination Technique et Administrative',
      nameEn: 'Technical and Administrative Coordination Office',
      nameFr: 'Bureau Coordination Technique et Administrative',
      color: 'bg-orange-700',
      icon: 'Network'
    }
  ],
  'sales-management': [
    {
      id: 'legal-regulation',
      name: 'Bureau Suivi Juridique et Régulation Foncier',
      nameEn: 'Legal Monitoring and Land Regulation Office',
      nameFr: 'Bureau Suivi Juridique et Régulation Foncier',
      color: 'bg-gray-600',
      icon: 'Shield'
    },
    {
      id: 'commercialization',
      name: 'Bureau Commercialisation et Réseau de Vente',
      nameEn: 'Marketing and Sales Network Office',
      nameFr: 'Bureau Commercialisation et Réseau de Vente',
      color: 'bg-gray-500',
      icon: 'TrendingUp'
    },
    {
      id: 'property-management',
      name: 'Bureau Gestion Immobilier et Locative',
      nameEn: 'Property and Rental Management Office',
      nameFr: 'Bureau Gestion Immobilier et Locative',
      color: 'bg-gray-700',
      icon: 'Home'
    }
  ]
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'land-cadastral',
    name: 'Département Gestion Foncier et Cadastrale',
    nameEn: 'Land and Cadastral Management Department',
    nameFr: 'Département Gestion Foncier et Cadastrale',
    color: 'bg-blue-700',
    icon: 'MapPin',
    description: 'Expertise complète en gestion foncière et cadastrale avec des services juridiques et techniques spécialisés pour tous vos besoins immobiliers.',
    descriptionEn: 'Complete expertise in land and cadastral management with specialized legal and technical services for all your real estate needs.',
    services: [
      'Études juridiques et conseil fonciers',
      'Études techniques et topographiques', 
      'Procédures administratives',
      'Régularisation foncière',
      'Bornage et délimitation'
    ],
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'financing',
    name: 'Département Financement Foncier et Immobilier',
    nameEn: 'Real Estate and Land Financing Department',
    nameFr: 'Département Financement Foncier et Immobilier',
    color: 'bg-orange-500',
    icon: 'CreditCard',
    description: 'Solutions financières innovantes et partenariats stratégiques pour concrétiser vos projets immobiliers et fonciers.',
    descriptionEn: 'Innovative financial solutions and strategic partnerships to realize your real estate and land projects.',
    services: [
      'Montage financier et ingénierie de projet',
      'Partenariat et suivi investisseur',
      'Coordination technique et administrative',
      'Études de faisabilité',
      'Recherche de financement'
    ],
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'sales-management',
    name: 'Département Vente et Gestion Immobilière',
    nameEn: 'Real Estate Sales and Management Department',
    nameFr: 'Département Vente et Gestion Immobilière',
    color: 'bg-gray-600',
    icon: 'Building',
    description: 'Commercialisation professionnelle et gestion complète de votre patrimoine immobilier avec un suivi juridique rigoureux.',
    descriptionEn: 'Professional marketing and complete management of your real estate portfolio with rigorous legal monitoring.',
    services: [
      'Suivi juridique et régulation foncier',
      'Commercialisation et réseau de vente',
      'Gestion immobilier et locative',
      'Évaluation immobilière',
      'Marketing immobilier'
    ],
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const DIVISIONS: Division[] = [
  {
    id: 'general-administration',
    name: 'Division Administration Générale',
    nameEn: 'General Administration Division',
    nameFr: 'Division Administration Générale',
    description: 'Gestion administrative globale, coordination des services et supervision des opérations quotidiennes de l\'entreprise.',
    descriptionEn: 'Global administrative management, service coordination and supervision of daily business operations.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-blue-600',
    offices: [
      {
        id: 'secretary-general',
        name: 'Bureau Secrétaire Général et Gestion Administrative',
        nameEn: 'Secretary General and Administrative Management Office',
        nameFr: 'Bureau Secrétaire Général et Gestion Administrative',
        description: 'Coordination générale des activités administratives, gestion du courrier, des événements, des appels et messagerie, ainsi que la gestion des chronos et répertoire des dossiers.',
        descriptionEn: 'General coordination of administrative activities, mail management, events, calls and messaging, as well as chronos management and file directory.',
        image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-indigo-700',
        divisionId: 'general-administration'
      },
      {
        id: 'logistics-general',
        name: 'Bureau de la Logistique et Moyens Généraux',
        nameEn: 'Logistics and General Resources Office',
        nameFr: 'Bureau de la Logistique et Moyens Généraux',
        description: 'Gestion des stocks, des équipements et des ressources matérielles de l\'entreprise.',
        descriptionEn: 'Stock management, equipment and material resources management of the company.',
        image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-orange-600',
        divisionId: 'general-administration'
      },
      {
        id: 'archives-documentation',
        name: 'Bureau des Archives Documentation et Services Internes',
        nameEn: 'Archives Documentation and Internal Services Office',
        nameFr: 'Bureau des Archives Documentation et Services Internes',
        description: 'Gestion des prestations, des visites, des archives et de la bibliothèque de l\'entreprise.',
        descriptionEn: 'Management of services, visits, archives and company library.',
        image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-indigo-500',
        divisionId: 'general-administration'
      }
    ]
  },
  {
    id: 'accounting-finance',
    name: 'Division Comptabilité et Finance',
    nameEn: 'Accounting and Finance Division',
    nameFr: 'Division Comptabilité et Finance',
    description: 'Gestion financière, comptabilité, contrôle budgétaire et analyse des performances économiques de l\'entreprise.',
    descriptionEn: 'Financial management, accounting, budget control and analysis of the company\'s economic performance.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-grey-600',
    offices: [
      {
        id: 'general-accounting',
        name: 'Bureau Comptabilité Générale et Fiscale',
        nameEn: 'General Accounting and Tax Office',
        nameFr: 'Bureau Comptabilité Générale et Fiscale',
        description: 'Tenue de la comptabilité générale et gestion des obligations fiscales.',
        descriptionEn: 'General accounting maintenance and tax obligations management.',
        image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-emerald-700',
        divisionId: 'accounting-finance'
      },
      {
        id: 'treasury-commitments',
        name: 'Bureau Trésorerie Engagements',
        nameEn: 'Treasury Commitments Office',
        nameFr: 'Bureau Trésorerie Engagements',
        description: 'Gestion de la trésorerie et suivi des engagements financiers.',
        descriptionEn: 'Treasury management and financial commitments monitoring.',
        image: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-emerald-600',
        divisionId: 'accounting-finance'
      },
      {
        id: 'project-finance',
        name: 'Bureau Finances Projets et Contrôle Budgétaire',
        nameEn: 'Project Finance and Budget Control Office',
        nameFr: 'Bureau Finances Projets et Contrôle Budgétaire',
        description: 'Financement des projets et contrôle budgétaire des opérations.',
        descriptionEn: 'Project financing and budget control of operations.',
        image: 'https://images.pexels.com/photos/6801663/pexels-photo-6801663.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-emerald-500',
        divisionId: 'accounting-finance'
      }
    ]
  },
  {
    id: 'human-resources',
    name: 'Division Ressources Humaines',
    nameEn: 'Human Resources Division',
    nameFr: 'Division Ressources Humaines',
    description: 'Gestion du personnel, recrutement, formation, développement des compétences et bien-être des employés.',
    descriptionEn: 'Personnel management, recruitment, training, skills development and employee welfare.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-blue-600',
    offices: [
      {
        id: 'recruitment-management',
        name: 'Bureau Recrutement et Gestion du Personnel',
        nameEn: 'Recruitment and Personnel Management Office',
        nameFr: 'Bureau Recrutement et Gestion du Personnel',
        description: 'Recrutement, gestion administrative du personnel et relations sociales.',
        descriptionEn: 'Recruitment, administrative personnel management and social relations.',
        image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-grey-700',
        divisionId: 'human-resources'
      },
      {
        id: 'training-development',
        name: 'Bureau Formation et Développement des Compétences',
        nameEn: 'Training and Skills Development Office',
        nameFr: 'Bureau Formation et Développement des Compétences',
        description: 'Formation continue, développement des compétences et plans de carrière.',
        descriptionEn: 'Continuous training, skills development and career planning.',
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-white-600',
        divisionId: 'human-resources'
      },
      {
        id: 'welfare-benefits',
        name: 'Bureau Bien-être et Avantages Sociaux',
        nameEn: 'Welfare and Social Benefits Office',
        nameFr: 'Bureau Bien-être et Avantages Sociaux',
        description: 'Gestion du bien-être des employés et administration des avantages sociaux.',
        descriptionEn: 'Employee welfare management and social benefits administration.',
        image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-orange-500',
        divisionId: 'human-resources'
      }
    ]
  },
  {
    id: 'marketing-communication',
    name: 'Division Marketing et Communication',
    nameEn: 'Marketing and Communication Division',
    nameFr: 'Division Marketing et Communication',
    description: 'Stratégies marketing, communication corporate, relations publiques et développement de la marque.',
    descriptionEn: 'Marketing strategies, corporate communication, public relations and brand development.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-blue-600',
    offices: [
      {
        id: 'marketing-strategy',
        name: 'Bureau Stratégie Marketing et Communication',
        nameEn: 'Marketing Strategy and Communication Office',
        nameFr: 'Bureau Stratégie Marketing et Communication',
        description: 'Élaboration des stratégies marketing et coordination des campagnes de communication.',
        descriptionEn: 'Marketing strategy development and communication campaign coordination.',
        image: 'https://images.pexels.com/photos/3184477/pexels-photo-3184477.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-orange-700',
        divisionId: 'marketing-communication'
      },
      {
        id: 'public-relations',
        name: 'Bureau Relations Publiques et Médias',
        nameEn: 'Public Relations and Media Office',
        nameFr: 'Bureau Relations Publiques et Médias',
        description: 'Gestion des relations publiques, relations presse et communication externe.',
        descriptionEn: 'Public relations management, press relations and external communication.',
        image: 'https://images.pexels.com/photos/3184491/pexels-photo-3184491.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-grey-600',
        divisionId: 'marketing-communication'
      },
      {
        id: 'brand-digital',
        name: 'Bureau Développement de Marque et Digital',
        nameEn: 'Brand Development and Digital Office',
        nameFr: 'Bureau Développement de Marque et Digital',
        description: 'Développement de la marque, marketing digital et présence en ligne.',
        descriptionEn: 'Brand development, digital marketing and online presence.',
        image: 'https://images.pexels.com/photos/3184505/pexels-photo-3184505.jpeg?auto=compress&cs=tinysrgb&w=800',
        color: 'bg-blue-500',
        divisionId: 'marketing-communication'
      }
    ]
  }
];

export const COMPANY_INFO: CompanyInfo = {
  name: 'GeoCasa Group',
  location: 'Yaoundé, Cameroun',
  openingHours: '08:00 - 18:00',
  phone: '+237 6XX XXX XXX',
  email: 'contact@geocasagroup.com'
};

export const TRANSLATIONS = {
  en: {
    login: 'Login',
    email: 'Email',
    password: 'Password',
    signIn: 'Sign In',
    welcome: 'Welcome',
    selectLanguage: 'Select Language',
    selectDepartment: 'Select Department',
    dashboard: 'Dashboard',
    requests: 'Requests',
    settings: 'Settings',
    logout: 'Logout',
    openingHours: 'Opening Hours',
    location: 'Location',
    connectedAs: 'Connected as',
    device: 'Device',
    departments: {
      'land-cadastral': 'Land and Cadastral Management Department',
      'financing': 'Real Estate and Land Financing Department',
      'sales-management': 'Real Estate Sales and Management Department'
    }
  },
  fr: {
    login: 'Connexion',
    email: 'Email',
    password: 'Mot de passe',
    signIn: 'Se connecter',
    welcome: 'Bienvenue',
    selectLanguage: 'Choisir la langue',
    selectDepartment: 'Sélectionner le département',
    dashboard: 'Tableau de bord',
    requests: 'Demandes',
    settings: 'Paramètres',
    logout: 'Déconnexion',
    openingHours: 'Heures d\'ouverture',
    location: 'Localisation',
    connectedAs: 'Connecté en tant que',
    device: 'Appareil',
    departments: {
      'land-cadastral': 'Département Gestion Foncier et Cadastrale',
      'financing': 'Département Financement Foncier et Immobilier',
      'sales-management': 'Département Vente et Gestion Immobilière'
    }
  }
};