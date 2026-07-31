import { useEffect } from "react";
import { api } from "@/shared/api/axiosInstance";
import { useAuth } from "./AuthContext";

export function useAuthInterceptor() {
    const { logout } = useAuth();

    useEffect(() => {
        const interceptorId = api.interceptors.response.use(
            (response) => {
                return response;
            },

            (error) => {
                if (error.response?.status === 401) {
                    logout();
                }

                return Promise.reject(error);
            }
        );

        return () => {
            api.interceptors.response.eject(interceptorId);
        };
    }, [logout]);
}