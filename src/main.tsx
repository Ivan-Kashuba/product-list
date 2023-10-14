import ReactDOM from "react-dom/client";
import "./app/styles/index.css";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./app/App.tsx";
import { QueryProvider } from "@/app/providers/QueryClientProvider";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <App />
  </QueryProvider>,
);
