import "bootstrap/dist/css/bootstrap.css";
import "./custom.scss";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/screens/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
