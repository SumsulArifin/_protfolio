import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import {createBrowserRouter,} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
    {
    path: "/home",
    Component: Home,
    },
      {
    path: "/about",
    Component: About,
    },
        {
    path: "/contact",
    Component: Contact,
    },
         {
    path: "/project",
    Component: Projects,
    },
    ]
  },
]);
export default router;