import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { PLay } from "./pages/PLay";

function App() {
  return (
    <Routes>
      <Route path="/Tic-Tac-Toe" element={<Home />} />
      <Route path="/Tic-Tac-Toe/play" element={<PLay />} />
    </Routes>
  );
}

export default App;
