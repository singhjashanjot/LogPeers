import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

interface User {
    id: string;
    name: string;
    email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage?.removeItem('authToken');
    };

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem('authToken');
                if (token) {
                    // Validate token with your backend
                    // const userData = await validateToken(token);
                    // setUser(userData);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Auth check failed:', error);
                logout();
            }
        };

        checkAuth();
    }, []);

    const login = (userData: User) => {
        setUser(userData);
        setIsAuthenticated(true);
        // Store auth token
        // localStorage.setItem('authToken', userData.token);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
