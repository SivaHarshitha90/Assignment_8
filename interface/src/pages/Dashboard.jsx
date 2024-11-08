// import { useState } from 'react';
// import DashboardNav from '../components/userDashboard/DashboardNav';
// import TodoList from '../components/userDashboard/TodoList';
// import { BarChart, Calendar, PieChart } from 'lucide-react';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('all');

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
//       <div className="container mx-auto px-4 py-6">
//         {/* Stats Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           <StatCard
//             title="Total Tasks"
//             value="12"
//             change="+3"
//             icon={<BarChart className="w-6 h-6 text-blue-500" />}
//           />
//           <StatCard
//             title="Due Today"
//             value="4"
//             change="+1"
//             icon={<Calendar className="w-6 h-6 text-green-500" />}
//           />
//           <StatCard
//             title="Completed"
//             value="8"
//             change="+2"
//             icon={<PieChart className="w-6 h-6 text-purple-500" />}
//           />
//         </div>

//         {/* Main Content */}
//         <div className="bg-white rounded-lg shadow">
//           {activeTab === 'all' && <TodoList />}
//           {activeTab === 'today' && <TodoList filter="today" />}
//           {activeTab === 'upcoming' && <TodoList filter="upcoming" />}
//           {activeTab === 'important' && <TodoList filter="important" />}
//           {activeTab === 'categories' && <TodoList groupBy="category" />}
//           {activeTab === 'analytics' && <Analytics />}
//           {activeTab === 'settings' && <Settings />}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Helper Components
// const StatCard = ({ title, value, change, icon }) => (
//   <div className="bg-white p-6 rounded-lg shadow-sm">
//     <div className="flex items-center justify-between mb-4">
//       <h3 className="text-gray-500 text-sm">{title}</h3>
//       {icon}
//     </div>
//     <div className="flex items-end justify-between">
//       <div className="text-2xl font-semibold">{value}</div>
//       <div className={`text-sm ${
//         change.startsWith('+') ? 'text-green-500' : 'text-red-500'
//       }`}>
//         {change} from last week
//       </div>
//     </div>
//   </div>
// );

// const Analytics = () => (
//   <div className="p-6">
//     <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
//     <p className="text-gray-600">Analytics features coming soon...</p>
//   </div>
// );

// const Settings = () => (
//   <div className="p-6">
//     <h2 className="text-2xl font-semibold mb-4">Settings</h2>
//     <p className="text-gray-600">Settings features coming soon...</p>
//   </div>
// );

// export default Dashboard;

import { useState } from 'react';
import DashboardNav from '../components/userDashboard/DashboardNav';
import TodoList from '../components/userDashboard/TodoList';
import { BarChart, Calendar, PieChart } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard
            title="Total Tasks"
            value="12"
            change="+3"
            icon={<BarChart className="w-6 h-6 text-blue-500" />}
          />
          <StatCard
            title="Due Today"
            value="4"
            change="+1"
            icon={<Calendar className="w-6 h-6 text-green-500" />}
          />
          <StatCard
            title="Completed"
            value="8"
            change="+2"
            icon={<PieChart className="w-6 h-6 text-purple-500" />}
          />
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow">
          {activeTab === 'all' && <TodoList />}
          {activeTab === 'today' && <TodoList filter="today" />}
          {activeTab === 'upcoming' && <TodoList filter="upcoming" />}
          {activeTab === 'important' && <TodoList filter="important" />}
          {activeTab === 'categories' && <TodoList groupBy="category" />}
          {activeTab === 'analytics' && <Analytics />}
          {activeTab === 'settings' && <Settings />}
        </div>
      </div>
    </div>
  );
};

// Helper Components
const StatCard = ({ title, value, change, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      {icon}
    </div>
    <div className="flex items-end justify-between">
      <div className="text-2xl font-semibold">{value}</div>
      <div className={`text-sm ${
        change.startsWith('+') ? 'text-green-500' : 'text-red-500'
      }`}>
        {change} from last week
      </div>
    </div>
  </div>
);

const Analytics = () => (
  <div className="p-6">
    <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
    <p className="text-gray-600">Analytics features coming soon...</p>
  </div>
);

const Settings = () => (
  <div className="p-6">
    <h2 className="text-2xl font-semibold mb-4">Settings</h2>
    <p className="text-gray-600">Settings features coming soon...</p>
  </div>
);

export default Dashboard;
