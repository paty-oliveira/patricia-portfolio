import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { routePages } from "./routePages";

const Router: FC = () => {
  return (
    <Routes>
      {routePages.map(({ path, element, key }) => (
        <Route key={key} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default Router;
