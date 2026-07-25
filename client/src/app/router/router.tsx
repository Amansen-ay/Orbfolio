import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/Home/HomePage";
import {LoginPage} from "@/pages/Login/LoginPage";
import {RegisterPage} from '@/pages/Register/RegisterPage';
import {PageNotFound} from '@/pages/NotFound/NotFoundPage';
import { WelcomePage } from "@/pages/onboarding/WelcomePage";
import { DisplayNamePage } from "@/pages/onboarding/DisplayNamePage";
import {UsernamePage} from '@/pages/onboarding/UsernamePage';
import {AvatarPage} from '@/pages/onboarding/AvatarPage';
import {BioPage} from '@/pages/onboarding/BioPage';
import {LocationPage} from '@/pages/onboarding/LocationPage';
import {BirthdayPage} from '@/pages/onboarding/BirthdayPage'


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
    },{
        path:'/onboarding/username',
        element:<UsernamePage />
    },
    {
        path:'/onboarding/avatar',
        element:<AvatarPage/>
    },
    {
        path:'/onboarding/bio',
        element:<BioPage/>
    },
    {
        path:'/onboarding/location',
        element:<LocationPage/>
    },
    {
        path:'/onboarding/dateofbirth',
        element:<BirthdayPage/>
    }
    ]);