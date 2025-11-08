import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../component/sidebar";
import Page1 from "../page/page1";
import Page2 from "../page/page2";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar/>,
        children: [
            { path: "/page1", element: <Page1/>, },
            { path: "/page2", element: <Page2/>, },
        ],
    },
]);

export default router

