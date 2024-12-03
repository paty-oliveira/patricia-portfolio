import Projects from "@/pages/projects";
import Work from "@/pages/work";

import Blog from "../pages/blog";
import Homepage from "../pages/homepage";
import { Route } from "./types";

export const routePages: Route[] = [
  {
    path: "/",
    element: <Homepage />,
    key: "homepage",
  },
  {
    path: "/blog",
    element: <Blog />,
    key: "blog",
  },
  {
    path: "/work",
    element: <Work />,
    key: "work",
  },
  {
    path: "/projects",
    element: <Projects />,
    key: "projects",
  },
];
