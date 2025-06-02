import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "@styles/theme";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Minusta from "./pages/Minusta";
import Hinnasto from "./pages/Hinnasto";
import OtaYhteytta from "./pages/OtaYhteytta";
import Footer from "./components/Footer";

const App: React.FC = () => (
  <BrowserRouter>
    <div className="app-container">
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/minusta" element={<Minusta />} />
          <Route path="/hinnasto" element={<Hinnasto />} />
          <Route path="/ota-yhteytta" element={<OtaYhteytta />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  </BrowserRouter>
);

export default App;
