import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="bg-slate-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Set the Link for TodoApp to '/' */}
        <Link to="/" className="text-xl font-bold">TodoApp</Link>
        <div className="space-x-4">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="hover:text-slate-300">Dashboard</Link>
              <button onClick={handleLogout} className="hover:text-slate-300">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-slate-300">Login</Link>
              <Link to="/register" className="hover:text-slate-300">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;