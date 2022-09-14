import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { UserProvider } from "./contexts/UserProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
