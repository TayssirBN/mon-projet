// creation de la boite qui contient la clé
import React, { createContext, useState, useContext, ReactNode } from 'react';

// définissons ce que notre boîte (contexte) peut contenir
interface AuthContextType {
  isAuthenticated: boolean; // indique si quelqu'un a la clé drapeau
  login: () => void; // fonction pour donner la clé
  logout: () => void; // fonction pour retirer la clé
}

// créons la boîte avec la clé
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// composant qui gère la boîte et la clé
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // donne la clé spéciale
  const login = () => setIsAuthenticated(true);
  console.log("connected: %s\n", login);

  // retire la clé spéciale
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook pour utiliser la boîte
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
