import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { AuthProvider } from "./app/contexts/AuthContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
