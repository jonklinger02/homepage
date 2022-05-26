import React from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./approutes";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppRoutes />);

// ReactDOM.render(
//   <React.StrictMode>
//     <AppRoutes />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

