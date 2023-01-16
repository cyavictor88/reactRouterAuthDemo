import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./hooks/useAuth";
import { indigo,blue } from "@mui/material/colors";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = createTheme({
  // palette: {
  //   primary: { main: "#3a34d2" }
  // },
  palette: {
    primary: {
      light: indigo[50],
      main: indigo[500],
      dark: indigo[900],
      contrastText: '#fff',
      
    },
    secondary: {
      light: blue[50],
      main: blue[500],
      dark: blue[900],
      contrastText: '#000',
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});
root.render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      {/*  using component composition to pass <theme....></> as {children} */}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
