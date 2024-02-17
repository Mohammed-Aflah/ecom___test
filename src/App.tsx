import { Header } from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingePage";
import Footer from "./components/common/Footer";
import "./App.css";
import Login from "./pages/Login";
import Detail from "./pages/Details";
function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
