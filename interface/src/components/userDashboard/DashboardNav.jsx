import { useState } from 'react';
import { 
  ListTodo, 
  Calendar, 
  Clock,
  Settings,
  PieChart,
  Tag,
  Star
} from 'lucide-react';

const DashboardNav = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'all', label: 'All Tasks', icon: <ListTodo size={20} /> },
    { id: 'today', label: 'Today', icon: <Clock size={20} /> },
    { id: 'upcoming', label: 'Upcoming', icon: <Calendar size={20} /> },
    { id: 'important', label: 'Important', icon: <Star size={20} /> },
    { id: 'categories', label: 'Categories', icon: <Tag size={20} /> },
    { id: 'analytics', label: 'Analytics', icon: <PieChart size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-6 overflow-x-auto py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;