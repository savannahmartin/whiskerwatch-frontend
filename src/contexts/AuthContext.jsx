import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    useEffect(() => {
        if (token) {
            fetchUserData();
        }
    }, [token]);

    const fetchUserData = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/auth/me`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(res.data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    const login = (newToken, userData) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}