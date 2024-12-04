import Blog from "@/pages/blog";
import Homepage from "@/pages/homepage";
import Project from "@/pages/projectId";
import Projects from "@/pages/projects";
import Work from "@/pages/work";

import { PagePath, Route } from "./types";

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
  {
    path: "/projects/:projectId",
    element: <Project />,
    key: "project_name",
  },
];

export const pagesConfig: PagePath = {
  homepage: "/",
  blog: "/blog",
  work: "/work",
  projects: "/projects",
};
