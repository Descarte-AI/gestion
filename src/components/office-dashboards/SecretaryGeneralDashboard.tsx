import React, { useState } from 'react';
import { 
  Mail, 
  Calendar, 
  Phone, 
  Clock, 
  FolderOpen,
  MessageSquare,
  Users,
  FileText,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Plus,
  Search,
  Filter,
  Eye,
  Edit
} from 'lucide-react';
import { User } from '../../types';

interface SecretaryGeneralDashboardProps {
  user: User;
}

const SecretaryGeneralDashboard: React.FC<SecretaryGeneralDashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    courrier: { total: 45, nouveau: 12, traite: 28, urgent: 5 },
    evenements: { total: 8, semaine: 3, mois: 15, planifies: 5 },
    appels: { total: 156, jour: 23, manques: 4, messages: 8 },
    dossiers: { total: 234, actifs: 89, archives: 145, nouveaux: 12 }
  };

  const recentActivities = [
    { id: 1, type: 'courrier', title: 'Nouveau courrier de la Direction Générale', time: '10:30', status: 'nouveau' },
    { id: 2, type: 'evenement', title: 'Réunion conseil d\'administration', time: '14:00', status: 'planifie' },
    { id: 3, type: 'appel', title: 'Appel manqué - Client VIP', time: '09:15', status: 'urgent' },
    { id: 4, type: 'dossier', title: 'Nouveau dossier RH créé', time: '08:45', status: 'nouveau' }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'courrier': return <Mail className="w-5 h-5 text-blue-600" />;
      case 'evenement': return <Calendar className="w-5 h-5 text-green-600" />;
      case 'appel': return <Phone className="w-5 h-5 text-orange-600" />;
      case 'dossier': return <FolderOpen className="w-5 h-5 text-purple-600" />;
      default: return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'nouveau': return 'bg-blue-100 text-blue-800';
      case 'planifie': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.courrier.total}</div>
              <div className="text-sm text-blue-600 font-medium">+{stats.courrier.nouveau} nouveaux</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Gestion du Courrier</h3>
          <p className="text-sm text-gray-600">Courriers en traitement</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.evenements.total}</div>
              <div className="text-sm text-green-600 font-medium">{stats.evenements.semaine} cette semaine</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Gestion des Événements</h3>
          <p className="text-sm text-gray-600">Événements planifiés</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.appels.jour}</div>
              <div className="text-sm text-orange-600 font-medium">{stats.appels.manques} manqués</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Appels & Messagerie</h3>
          <p className="text-sm text-gray-600">Appels aujourd'hui</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <FolderOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.dossiers.actifs}</div>
              <div className="text-sm text-purple-600 font-medium">{stats.dossiers.nouveaux} nouveaux</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Répertoire Dossiers</h3>
          <p className="text-sm text-gray-600">Dossiers actifs</p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Activités Récentes</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Voir tout
          </button>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  {getActivityIcon(activity.type)}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{activity.title}</div>
                  <div className="text-sm text-gray-600">{activity.time}</div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCourrierManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Gestion du Courrier</h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>Nouveau Courrier</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Courriers entrants</p>
                <p className="text-2xl font-bold text-blue-800">28</p>
              </div>
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Courriers sortants</p>
                <p className="text-2xl font-bold text-green-800">17</p>
              </div>
              <Mail className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600 font-medium">Urgents</p>
                <p className="text-2xl font-bold text-red-800">5</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { id: 1, expediteur: 'Direction Générale', objet: 'Rapport mensuel des activités', date: '2024-01-20', statut: 'urgent' },
            { id: 2, expediteur: 'Ministère des Domaines', objet: 'Nouvelle réglementation foncière', date: '2024-01-19', statut: 'normal' },
            { id: 3, expediteur: 'Client VIP', objet: 'Demande de rendez-vous', date: '2024-01-18', statut: 'traite' }
          ].map((courrier) => (
            <div key={courrier.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex-1">
                <div className="font-medium text-gray-900">{courrier.objet}</div>
                <div className="text-sm text-gray-600">De: {courrier.expediteur} • {courrier.date}</div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(courrier.statut)}`}>
                  {courrier.statut}
                </span>
                <button className="text-blue-600 hover:text-blue-700">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: TrendingUp },
    { id: 'courrier', label: 'Gestion Courrier', icon: Mail },
    { id: 'evenements', label: 'Événements', icon: Calendar },
    { id: 'appels', label: 'Appels & Messages', icon: Phone },
    { id: 'dossiers', label: 'Répertoire Dossiers', icon: FolderOpen }
  ];

  return (
    <div className="space-y-6">
      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'courrier' && renderCourrierManagement()}
      {activeTab === 'evenements' && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Gestion des Événements</h3>
          <p className="text-gray-600">Module de gestion des événements en développement...</p>
        </div>
      )}
      {activeTab === 'appels' && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Gestion des Appels et Messagerie</h3>
          <p className="text-gray-600">Module de gestion des appels en développement...</p>
        </div>
      )}
      {activeTab === 'dossiers' && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Répertoire des Dossiers</h3>
          <p className="text-gray-600">Module de gestion des dossiers en développement...</p>
        </div>
      )}
    </div>
  );
};

export default SecretaryGeneralDashboard;