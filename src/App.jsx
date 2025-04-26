import { Router, Routes, Link, Route, BrowserRouter } from "react-router-dom";
import Factorial from "./components/Factorial";
import Sum from "./components/Sum";
import Mul from "./components/Mul";
import LargestNo from "./components/LargestNo";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="bg-slate-900 min-h-screen w-full text-white">
        <nav className="p-6">
          <ul className="flex justify-center">
            <li className=" mx-4 text-3xl ">
              {" "}
              <Link to="/sum"> Sum </Link>{" "}
            </li>
            <li className=" mx-4 text-3xl ">
              {" "}
              <Link to="/mul"> Mul </Link>{" "}
            </li>
            <li className=" mx-4 text-3xl ">
              {" "}
              <Link to="/factorial"> Factorial </Link>{" "}
            </li>
            <li className=" mx-4 text-3xl ">
              {" "}
              <Link to="/largest"> LargestNo </Link>{" "}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/sum" element={<Sum/>} />
          <Route path="/mul" element={<Mul/>} />
          <Route path="/factorial" element={<Factorial />} />
          <Route path="/largest" element={<LargestNo/>} />
        </Routes>
      </div>
      </div>
      </BrowserRouter>
  );
};

export default App;
