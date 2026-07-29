import {
    createContext,
    useContext,
    useState,
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
    token: string | null;
    user: User | null;
    setAuth: (token: string, user: User) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem("token");
    });
    const [user, setUser] = useState<User | null>(null);

    function setAuth(token: string, user: User) {
        setToken(token);
        setUser(user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                setAuth,
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