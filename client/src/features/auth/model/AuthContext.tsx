import {
    createContext,
    useContext,
    useState,
    useCallback,
    type ReactNode
} from "react";

type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
};

type AuthContextType = {
    token: string | null,
    user: User | null,
    setAuth: (token: string, user: User) => void,
    logout: () => void
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem("token");
    });
    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ?
            JSON.parse(storedUser)
            :
            null;
    });

    function setAuth(token: string, user: User) {
        setToken(token);
        setUser(user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
    }
    const logout = useCallback(() => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }, []);

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                setAuth,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}