import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import MainLayout from './Layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </AuthProvider>
    </Router>
  );
};

export default App;