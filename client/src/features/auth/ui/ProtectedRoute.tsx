import { Navigate } from "react-router-dom";
import { useAuth } from "../model/AuthContext";
import type { ReactNode } from "react";

type ProtectedRouteProps = {
    children: ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
}