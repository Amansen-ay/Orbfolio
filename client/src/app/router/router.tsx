import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/Home/HomePage";
import { LoginPage } from "@/pages/Login/LoginPage";
import { RegisterPage } from '@/pages/Register/RegisterPage';
import { PageNotFound } from '@/pages/NotFound/NotFoundPage';
import { WelcomePage } from "@/pages/onboarding/WelcomePage";
import { DisplayNamePage } from "@/pages/onboarding/DisplayNamePage";
import { UsernamePage } from '@/pages/onboarding/UsernamePage';
import { AvatarPage } from '@/pages/onboarding/AvatarPage';
import { BioPage } from '@/pages/onboarding/BioPage';
import { LocationPage } from '@/pages/onboarding/LocationPage';
import { BirthdayPage } from '@/pages/onboarding/BirthdayPage'
import { OnboardingCompletePage } from '@/pages/onboardingComplete/OnboardingCompletePage';
import { ProfilePreviewPage } from "@/pages/ProfilePreview/ProfilePreviewPage";
import { ProtectedRoute } from "@/features/auth/ui/ProtectedRoute";
import { DashboardPage } from "@/pages/dashboard/DashboardPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/onboarding/welcome",
        element: (
            <ProtectedRoute>
                <WelcomePage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/onboarding/displayname",
        element: (
            <ProtectedRoute>
                <DisplayNamePage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/onboarding/username",
        element: (
            <ProtectedRoute>
                <UsernamePage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/onboarding/avatar",
        element: (
            <ProtectedRoute>
                <AvatarPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/onboarding/bio",
        element: (
            <ProtectedRoute>
                <BioPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/onboarding/location",
        element: (
            <ProtectedRoute>
                <LocationPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/onboarding/dateofbirth",
        element: (
            <ProtectedRoute>
                <BirthdayPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/onboarding/finished",
        element: (
            <ProtectedRoute>
                <OnboardingCompletePage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/preview",
        element: (
            <ProtectedRoute>
                <ProfilePreviewPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
    {
        path:"/dashboard",
        element:(
            <DashboardPage/>
        )
    }
]);