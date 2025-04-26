import { Router, Routes, Link, Route } from "react-router-dom";
import Factorial from "./components/Factorial";
import Sum from "./components/Sum";
import Mul from "./components/Mul";

const App = () => {
  return (
    <Router>
      <div>
        <div className="bg-slate-900 min-h-screen text-white"></div>
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
          </ul>
        </nav>

        <Routes>
          <Route path="/sum" element={<Sum />} />
          <Route path="/sum" element={<Mul />} />
          <Route path="/sum" element={<Factorial />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
