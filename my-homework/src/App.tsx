

import './App.css';
import { Login } from './login';
import { Inscription } from './inscription';
import { Failed } from './failed';
import { Valide } from './valide';
import { Dashboard } from './dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route
            path="/valide"
            element={<ProtectedRoute element={<Valide />} />}
          />
          <Route path="/failed" element={<Failed />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
