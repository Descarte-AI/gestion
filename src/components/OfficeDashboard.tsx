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
  Star
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left Section - Back Button & Office Info */}
            <div className="flex items-center space-x-6">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Retour</span>
              </button>
              
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${office.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <Building className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{office.nameFr}</h1>
                  <p className="text-sm text-gray-600">GeoCasa Group</p>
                </div>
              </div>
            </div>

            {/* Center Section - Time Display */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-4 bg-gray-50 rounded-2xl px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 font-mono">
                      {formatTime(currentTime)}
                    </div>
                    <div className="text-xs text-gray-500">Heure actuelle</div>
                  </div>
                </div>
                
                <div className="w-px h-12 bg-gray-300"></div>
                
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-900 capitalize">
                      {currentTime.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}
                    </div>
                    <div className="text-xs text-gray-500">Date du jour</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - User Info */}
            <div className="flex items-center space-x-4">
              {/* Session Time */}
              <div className="hidden md:flex items-center space-x-2 bg-blue-50 rounded-xl px-4 py-2 border border-blue-100">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="text-center">
                  <div className="text-sm font-bold text-blue-900 font-mono">
                    {formatSessionTime(sessionTime)}
                  </div>
                  <div className="text-xs text-blue-600">Session bureau</div>
                </div>
              </div>

              {/* User Profile */}
              <div className="flex items-center space-x-4 bg-gray-50 rounded-2xl px-4 py-2 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                    <UserIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-600">Responsable Bureau</div>
                  </div>
                </div>
                
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-3 py-2 rounded-xl transition-all duration-200 border border-red-200 hover:border-red-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden lg:inline text-sm font-medium">Déconnexion</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* User Stats Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm text-blue-100">Jours dans ce bureau</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-sm text-blue-100">Note performance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">89%</div>
              <div className="text-sm text-blue-100">Taux d'efficacité</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-blue-100">Projets actifs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderOfficeDashboard()}
      </main>
    </div>
  );
};

export default OfficeDashboard;