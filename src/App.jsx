import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuDetail from "./pages/MenuDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<MenuDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
