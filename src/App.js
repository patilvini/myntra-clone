import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage.js/LoginPage";
import PageNotFoundPage from "./pages/404Page/PageNotFoundPage";
import MainLayoutPage from "./pages/layoutPage/MainLayoutPage";
import Navbar from "./components/Navbar/Navbar";
import Men from "./components/men/Men";
import Women from "./components/women/Women";
import Kids from "./components/kids/Kids";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<MainLayoutPage />}>
          <Route path="/shop/men" element={<Men />} />
          <Route path="/shop/women" element={<Women />} />
          <Route path="/shop/kids" element={<Kids />} />
        </Route>
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
