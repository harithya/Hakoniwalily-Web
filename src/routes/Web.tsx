import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components";
import { HomeView, NewsDetailView, NewsView, ProfileView, ReleaseDetailView, ReleaseView } from "../pages";

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
            { path: "/news/:id", element: <NewsDetailView /> },
            { path: "/profile", element: <ProfileView />, },
            { path: "/release", element: <ReleaseView />, },
            { path: "/release/:id", element: <ReleaseDetailView /> }

        ]
    },
]);

export default router;