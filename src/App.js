import { BrowserRouter, Routes, Route } from "react-router-dom";
import Count from "./Count/Count";
import Count2 from "./Count/Count2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/count" element={<Count />}></Route>
        <Route path="/count2" element={<Count2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
