import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/Home/HomePage";
import {LoginPage} from "@/pages/Login/LoginPage";
import {RegisterPage} from '@/pages/Register/RegisterPage';
import {PageNotFound} from '@/pages/NotFound/NotFoundPage';
import { WelcomePage } from "@/pages/onboarding/WelcomePage";
import { DisplayNamePage } from "@/pages/onboarding/DisplayNamePage";

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
        path: "*",
        element: <PageNotFound />,
    },
    {
        path:'/onboarding/welcome',
        element:<WelcomePage/>
    },
    {
        path:'/onboarding/displayname',
        element:<DisplayNamePage/>
    }
    ]);