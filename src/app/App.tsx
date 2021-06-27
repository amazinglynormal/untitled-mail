import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./AppLayout";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <AppLayout />;
    </Router>
  );
};
