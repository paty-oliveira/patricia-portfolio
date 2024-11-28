import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Sidebar />
        <Router />
      </main>
    </BrowserRouter>
  );
}

export default App;
