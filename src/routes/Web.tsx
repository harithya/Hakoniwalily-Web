import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components";
import { HomeView, NewsView, ProfileView } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout hideLogo={true} />,
        children: [
            { path: "/", element: <HomeView />, },
        ]
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/news", element: <NewsView />, },
            { path: "/profile", element: <ProfileView />, },
        ]
    },
]);

export default router;