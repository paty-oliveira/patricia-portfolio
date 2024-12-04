type Page = "homepage" | "blog" | "work" | "projects";

type Path = "/" | "/blog" | "/work" | "/projects" | "/projects/:projectName";

export type PagePath = Record<Page, Path>;

export interface Route {
  path: Path;
  element: JSX.Element;
  key: string;
}
