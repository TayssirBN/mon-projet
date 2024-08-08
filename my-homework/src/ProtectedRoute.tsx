//creation du porte qui analyser l'entrée avec la clé
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface ProtectedRouteProps {
  element: React.ReactNode; // la page qu'on veut protéger
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // si la pers n'a pas la clé, on la renvoie à la page d'accueil
    return <Navigate to="/" />;
  }

  // si la pers a la clé, on la laisse entrer
  return <>{element}</>;
};

export default ProtectedRoute;
