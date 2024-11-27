import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState('Guest');

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        console.log('Logged In');
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser('Guest');
        console.log('Logged Out');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthContext, AuthProvider };