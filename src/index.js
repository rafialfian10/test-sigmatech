import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

// client
const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={client}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </QueryClientProvider>
);

reportWebVitals();
