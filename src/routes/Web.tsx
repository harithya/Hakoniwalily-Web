import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components";
import { HomeView, NewsView } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout hideLogo={true} />,
        children: [
            { path: "/", element: <HomeView />, },
        ]
    },
    {
        path: "/news",
        element: <MainLayout />,
        children: [
            { path: "/news", element: <NewsView />, },
        ]
    },
]);

export default router;