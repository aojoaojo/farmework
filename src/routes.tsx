import { createBrowserRouter } from "react-router";
import { Sobre } from "./components/sobre";
import { Home } from "./pages/home";
import { Layout } from "./_layout/layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/farmework/', element: <Home /> },
            { path: '/farmework/sobre', element: <Sobre /> },
            { path: '/farmework/servicos', element: <div>Serviços</div> },
            { path: '/farmework/contato', element: <div>Contato</div> },
        ]
    },
]);