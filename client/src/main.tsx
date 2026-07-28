import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/styles/global.css";
import { AppProviders } from "@/app/providers/AppProvider";
import { AuthProvider } from "@/features/auth/model/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <AppProviders />
    </AuthProvider>
  </StrictMode>
);