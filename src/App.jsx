import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { PLay } from "./pages/PLay";

function App() {
  return (
    <Routes>
      <Route path="/tic-tac-toe" element={<Home />} />
      <Route path="/play" element={<PLay />} />
    </Routes>
  );
}

export default App;
