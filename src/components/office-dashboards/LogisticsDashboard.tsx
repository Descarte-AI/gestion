import React, { useState } from 'react';
import { 
  Package, 
  Monitor, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Truck,
  Wrench,
  BarChart3
} from 'lucide-react';
import { User } from '../../types';

interface LogisticsDashboardProps {
  user: User;
}

const LogisticsDashboard: React.FC<LogisticsDashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    stock: { total: 1250, faible: 23, rupture: 5, commandes: 12 },
    equipements: { total: 89, fonctionnel: 76, maintenance: 8, panne: 5 }
  };

  const stockItems = [
    { id: 1, nom: 'Papier A4', quantite: 150, seuil: 50, statut: 'normal', categorie: 'Bureautique' },
    { id: 2, nom: 'Cartouches d\'encre', quantite: 12, seuil: 20, statut: 'faible', categorie: 'Bureautique' },
    { id: 3, nom: 'Matériel topographique', quantite: 0, seuil: 5, statut: 'rupture', categorie: 'Technique' },
    { id: 4, nom: 'Fournitures de bureau', quantite: 85, seuil: 30, statut: 'normal', categorie: 'Bureautique' }
  ];

  const equipments = [
    { id: 1, nom: 'Ordinateur Bureau 01', type: 'Informatique', statut: 'fonctionnel', maintenance: '2024-03-15' },
    { id: 2, nom: 'Imprimante HP LaserJet', type: 'Bureautique', statut: 'maintenance', maintenance: '2024-01-20' },
    { id: 3, nom: 'Théodolite Leica', type: 'Topographie', statut: 'fonctionnel', maintenance: '2024-02-10' },
    { id: 4, nom: 'Véhicule de service', type: 'Transport', statut: 'panne', maintenance: '2024-01-18' }
  ];

  const getStockStatusColor = (statut: string) => {
    switch (statut) {
      case 'normal': return 'bg-green-100 text-green-800';
      case 'faible': return 'bg-yellow-100 text-yellow-800';
      case 'rupture': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEquipmentStatusColor = (statut: string) => {
    switch (statut) {
      case 'fonctionnel': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'panne': return 'bg-red-100 text-red-800';
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
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.stock.total}</div>
              <div className="text-sm text-blue-600 font-medium">Articles en stock</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Stock Total</h3>
          <p className="text-sm text-gray-600">Tous les articles</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.stock.faible}</div>
              <div className="text-sm text-yellow-600 font-medium">Stock faible</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Alertes Stock</h3>
          <p className="text-sm text-gray-600">Nécessite réapprovisionnement</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.equipements.fonctionnel}</div>
              <div className="text-sm text-green-600 font-medium">Fonctionnels</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Équipements</h3>
          <p className="text-sm text-gray-600">En état de marche</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stats.equipements.maintenance + stats.equipements.panne}</div>
              <div className="text-sm text-red-600 font-medium">Maintenance</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Maintenance</h3>
          <p className="text-sm text-gray-600">Équipements à réparer</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Actions Rapides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <Plus className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-blue-900">Ajouter Article</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
            <Truck className="w-6 h-6 text-green-600" />
            <span className="font-medium text-green-900">Nouvelle Commande</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors">
            <Wrench className="w-6 h-6 text-yellow-600" />
            <span className="font-medium text-yellow-900">Maintenance</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
            <BarChart3 className="w-6 h-6 text-purple-600" />
            <span className="font-medium text-purple-900">Rapport</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderStockManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Gestion des Stocks</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              <span>Nouvel Article</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Article</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Catégorie</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Quantité</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Seuil</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Statut</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stockItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{item.nom}</td>
                  <td className="py-3 px-4 text-gray-600">{item.categorie}</td>
                  <td className="py-3 px-4 text-gray-900">{item.quantite}</td>
                  <td className="py-3 px-4 text-gray-600">{item.seuil}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStockStatusColor(item.statut)}`}>
                      {item.statut}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-700">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-700">
                        <Edit className="w-4 h-4" />
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

  const renderEquipmentManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Gestion des Équipements</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un équipement..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              <span>Nouvel Équipement</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Équipement</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Statut</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Dernière Maintenance</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {equipments.map((equipment) => (
                <tr key={equipment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{equipment.nom}</td>
                  <td className="py-3 px-4 text-gray-600">{equipment.type}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEquipmentStatusColor(equipment.statut)}`}>
                      {equipment.statut}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{equipment.maintenance}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-700">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-700">
                        <Wrench className="w-4 h-4" />
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
    { id: 'stock', label: 'Gestion des Stocks', icon: Package },
    { id: 'equipements', label: 'Gestion des Équipements', icon: Monitor }
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
      {activeTab === 'stock' && renderStockManagement()}
      {activeTab === 'equipements' && renderEquipmentManagement()}
    </div>
  );
};

export default LogisticsDashboard;