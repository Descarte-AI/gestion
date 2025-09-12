import React, { useState } from 'react';
import { 
  Archive, 
  Users, 
  BookOpen, 
  Eye,
  TrendingUp,
  Plus,
  Search,
  Filter,
  FileText,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  Star
} from 'lucide-react';
import { User } from '../../types';

interface ArchivesDashboardProps {
  user: User;
}

const ArchivesDashboard: React.FC<ArchivesDashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    prestations: { total: 156, encours: 23, terminees: 128, retard: 5 },
    visites: { total: 89, semaine: 12, mois: 45, planifiees: 8 },
    archives: { total: 2340, numeriques: 1890, physiques: 450, recentes: 34 },
    bibliotheque: { total: 567, emprunts: 45, disponibles: 522, nouveaux: 12 }
  };

  const recentActivities = [
    { id: 1, type: 'prestation', title: 'Nouvelle demande de service client', time: '10:30', status: 'nouveau' },
    { id: 2, type: 'visite', title: 'Visite programmée - Inspection bureau', time: '14:00', status: 'planifie' },
    { id: 3, type: 'archive', title: 'Document archivé - Contrat 2024', time: '09:15', status: 'complete' },
    { id: 4, type: 'bibliotheque', title: 'Nouveau livre ajouté à la collection', time: '08:45', status: 'nouveau' }
  ];

  const prestations = [
    { id: 1, client: 'Jean Mballa', service: 'Consultation archives', statut: 'encours', date: '2024-01-20', priorite: 'normale' },
    { id: 2, client: 'Marie Nguema', service: 'Recherche documentaire', statut: 'terminee', date: '2024-01-19', priorite: 'haute' },
    { id: 3, client: 'Paul Essomba', service: 'Copie certifiée', statut: 'retard', date: '2024-01-15', priorite: 'urgente' },
    { id: 4, client: 'Alice Nkomo', service: 'Consultation bibliothèque', statut: 'encours', date: '2024-01-18', priorite: 'normale' }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'prestation': return <Eye className="w-5 h-5 text-blue-600" />;
      case 'visite': return <Users className="w-5 h-5 text-green-600" />;
      case 'archive': return <Archive className="w-5 h-5 text-purple-600" />;
      case 'bibliotheque': return <BookOpen className="w-5 h-5 text-orange-600" />;
      default: return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgente': return 'bg-red-100 text-red-800';
      case 'haute': return 'bg-orange-100 text-orange-800';
      case 'nouveau': return 'bg-blue-100 text-blue-800';
      case 'planifie': return 'bg-green-100 text-green-800';
      case 'complete': return 'bg-purple-100 text-purple-800';
      case 'encours': return 'bg-yellow-100 text-yellow-800';
      case 'terminee': return 'bg-green-100 text-green-800';
      case 'retard': return 'bg-red-100 text-red-800';
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
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.prestations.encours}</div>
              <div className="text-sm text-blue-600 font-medium">En cours</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Gestion des Prestations</h3>
          <p className="text-sm text-gray-600">Services clients actifs</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.visites.semaine}</div>
              <div className="text-sm text-green-600 font-medium">Cette semaine</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Gestion des Visites</h3>
          <p className="text-sm text-gray-600">Visites programmées</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Archive className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.archives.total}</div>
              <div className="text-sm text-purple-600 font-medium">+{stats.archives.recentes} récents</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Gestion des Archives</h3>
          <p className="text-sm text-gray-600">Documents archivés</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.bibliotheque.disponibles}</div>
              <div className="text-sm text-orange-600 font-medium">{stats.bibliotheque.emprunts} empruntés</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Gestion Bibliothèque</h3>
          <p className="text-sm text-gray-600">Ouvrages disponibles</p>
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

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Répartition Archives</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Archives numériques</span>
              <span className="font-semibold text-gray-900">{stats.archives.numeriques}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Archives physiques</span>
              <span className="font-semibold text-gray-900">{stats.archives.physiques}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full" 
                style={{ width: `${(stats.archives.numeriques / stats.archives.total) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Prestations</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Taux de satisfaction</span>
              <span className="font-semibold text-green-600">94%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Temps moyen traitement</span>
              <span className="font-semibold text-gray-900">2.5 jours</span>
            </div>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-600 ml-2">4.7/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrestationsManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Gestion des Prestations</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une prestation..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              <span>Nouvelle Prestation</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Client</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Service</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Priorité</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Statut</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {prestations.map((prestation) => (
                <tr key={prestation.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{prestation.client}</td>
                  <td className="py-3 px-4 text-gray-600">{prestation.service}</td>
                  <td className="py-3 px-4 text-gray-600">{prestation.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(prestation.priorite)}`}>
                      {prestation.priorite}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(prestation.statut)}`}>
                      {prestation.statut}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-700">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: TrendingUp },
    { id: 'prestations', label: 'Gestion des Prestations', icon: Eye },
    { id: 'visites', label: 'Gestion des Visites', icon: Users },
    { id: 'archives', label: 'Gestion des Archives', icon: Archive },
    { id: 'bibliotheque', label: 'Gestion de la Bibliothèque', icon: BookOpen }
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
      {activeTab === 'prestations' && renderPrestationsManagement()}
      {activeTab === 'visites' && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Gestion des Visites</h3>
          <p className="text-gray-600">Module de gestion des visites en développement...</p>
        </div>
      )}
      {activeTab === 'archives' && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Gestion des Archives</h3>
          <p className="text-gray-600">Module de gestion des archives en développement...</p>
        </div>
      )}
      {activeTab === 'bibliotheque' && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Gestion de la Bibliothèque</h3>
          <p className="text-gray-600">Module de gestion de la bibliothèque en développement...</p>
        </div>
      )}
    </div>
  );
};

export default ArchivesDashboard;