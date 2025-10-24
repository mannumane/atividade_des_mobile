import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/base/tokens.css";
import "./styles/base/base.css";
import "./styles/layout/structure.css";
import "./styles/layout/header-footer.css";
import "./styles/components/buttons.css";
import "./styles/components/cards.css";
import "./styles/components/forms.css";
import "./styles/components/tables.css";
import "./styles/components/utilities.css";
import "./styles/pages/common.css";
import "./styles/pages/home.css";
import "./styles/pages/navigation.css";
import "./styles/pages/admin.css";
import "./styles/pages/forms.css";
import "./styles/pages/profile.css";
import "./styles/pages/category-techno.css";
import "./styles/pages/search.css";
import "./styles/pages/highlights.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
