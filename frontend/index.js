import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import Login from "./Pages/Login";
import { pleiztTheme } from "./Common/Utils/theme";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={pleiztTheme}>
      <Login />
    </ThemeProvider>
  </React.StrictMode>
);
