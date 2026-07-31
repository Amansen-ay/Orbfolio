import { RouterProvider } from "react-router-dom";
import { QueryProvider } from "./QueryProvider";
import { router } from "@/app/router/router";
import { useAuthInterceptor } from "@/features/auth/model/useAuthInterceptor";

export function AppProviders() {
  useAuthInterceptor();
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}