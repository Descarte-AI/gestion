import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  User as UserIcon, 
  Clock, 
  Calendar,
  Building,
  Mail,
  Phone,
  FileText,
  Users,
  Archive,
  Package,
  Settings,
  BookOpen,
  Eye,
  MessageSquare,
  Briefcase,
  Monitor,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Star,
  Home,
  BarChart3,
  PieChart,
  Activity,
  Bell,
  Search,
  Filter,
  Plus,
  Menu,
  X
} from 'lucide-react';
import { User } from '../types';
import { DIVISIONS } from '../constants';
import SecretaryGeneralDashboard from './office-dashboards/SecretaryGeneralDashboard';
import LogisticsDashboard from './office-dashboards/LogisticsDashboard';
import ArchivesDashboard from './office-dashboards/ArchivesDashboard';

interface OfficeDashboardProps {
  user: User;
  officeId: string;
  onBack: () => void;
  onLogout: () => void;
  language: string;
}

const OfficeDashboard: React.FC<OfficeDashboardProps> = ({
  user,
  officeId,
  onBack,
  onLogout,
  language
}) => {
  const [sessionTime, setSessionTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Find the office details
  const office = DIVISIONS.flatMap(div => div.offices).find(off => off.id === officeId);
  
  if (!office) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bureau non trouvé</h2>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retour
          </button>
        </div>
      </div>
    );
  }

  // Update time every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
      setSessionTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatSessionTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  // Sidebar menu items based on office type
  const getSidebarItems = () => {
    const commonItems = [
      { id: 'dashboard', label: 'Tableau de bord', icon: Home },
      { id: 'analytics', label: 'Analyses', icon: BarChart3 },
      { id: 'reports', label: 'Rapports', icon: FileText },
      { id: 'settings', label: 'Paramètres', icon: Settings }
    ];

    switch (officeId) {
      case 'secretary-general':
        return [
          { id: 'dashboard', label: 'Vue d\'ensemble', icon: Home },
          { id: 'courrier', label: 'Gestion Courrier', icon: Mail },
          { id: 'evenements', label: 'Événements', icon: Calendar },
          { id: 'appels', label: 'Appels & Messages', icon: Phone },
          { id: 'dossiers', label: 'Répertoire Dossiers', icon: Archive },
          ...commonItems.slice(1)
        ];
      case 'logistics-general':
        return [
          { id: 'dashboard', label: 'Vue d\'ensemble', icon: Home },
          { id: 'stock', label: 'Gestion des Stocks', icon: Package },
          { id: 'equipements', label: 'Gestion des Équipements', icon: Monitor },
          { id: 'commandes', label: 'Commandes', icon: Plus },
          ...commonItems.slice(1)
        ];
      case 'archives-documentation':
        return [
          { id: 'dashboard', label: 'Vue d\'ensemble', icon: Home },
          { id: 'prestations', label: 'Gestion des Prestations', icon: Eye },
          { id: 'visites', label: 'Gestion des Visites', icon: Users },
          { id: 'archives', label: 'Gestion des Archives', icon: Archive },
          { id: 'bibliotheque', label: 'Gestion de la Bibliothèque', icon: BookOpen },
          ...commonItems.slice(1)
        ];
      default:
        return commonItems;
    }
  };

  const sidebarItems = getSidebarItems();

  const renderOfficeDashboard = () => {
    switch (officeId) {
      case 'secretary-general':
        return <SecretaryGeneralDashboard user={user} />;
      case 'logistics-general':
        return <LogisticsDashboard user={user} />;
      case 'archives-documentation':
        return <ArchivesDashboard user={user} />;
      default:
        return (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tableau de bord en développement
            </h3>
            <p className="text-gray-600">
              Le tableau de bord pour ce bureau sera bientôt disponible.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 ${office.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-lg">{office.nameFr}</h2>
                <p className="text-sm text-gray-600">GeoCasa Group</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600 shadow-md'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">Responsable Bureau</p>
              </div>
            </div>
            
            {/* Session Info */}
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Session:</span>
                <span className="font-mono font-semibold text-blue-600">{formatSessionTime(sessionTime)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              
              {/* Left Section - Menu & Back Button */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                >
                  <Menu className="w-6 h-6 text-gray-600" />
                </button>
                
                <button
                  onClick={onBack}
                  className="flex items-center space-x-3 px-6 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-200 shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="font-medium">Retour</span>
                </button>
              </div>

              {/* Center Section - Time Display */}
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-4 bg-gray-50 rounded-2xl px-6 py-3 border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900 font-mono">
                        {formatTime(currentTime)}
                      </div>
                      <div className="text-xs text-gray-500">Heure actuelle</div>
                    </div>
                  </div>
                  
                  <div className="w-px h-10 bg-gray-300"></div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900 capitalize">
                        {currentTime.toLocaleDateString('fr-FR', { 
                          weekday: 'short', 
                          day: 'numeric', 
                          month: 'short' 
                        })}
                      </div>
                      <div className="text-xs text-gray-500">Date du jour</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Actions & User */}
              <div className="flex items-center space-x-4">
                {/* Quick Actions */}
                <div className="hidden lg:flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                  </button>
                </div>

                {/* User Profile & Logout */}
                <div className="flex items-center space-x-3 bg-gray-50 rounded-2xl px-4 py-2 border border-gray-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-600">Bureau Manager</div>
                  </div>
                  <button
                    onClick={onLogout}
                    className="flex items-center space-x-1 bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1 rounded-lg transition-all duration-200 border border-red-200 hover:border-red-300"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">Sortir</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Performance Stats Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-blue-100">Jours actifs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm text-blue-100">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">89%</div>
                <div className="text-sm text-blue-100">Efficacité</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-blue-100">Projets actifs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          {renderOfficeDashboard()}
        </main>
      </div>
    </div>
  );
};

export default OfficeDashboard;