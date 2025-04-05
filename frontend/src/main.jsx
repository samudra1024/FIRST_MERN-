import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ChakraProvider } from "@chakra-ui/react";
import BackPic from "./component/BookBackgorund.jpg";

createRoot(document.getElementById("root")).render(
  <div className="min-h-screen text-lg">
    <BrowserRouter>
      <ChakraProvider>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </ChakraProvider>
    </BrowserRouter>
  </div>
);
