import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
    {
        path: "/mainpage",
        element: <App/>,
    },
]);

export default router

