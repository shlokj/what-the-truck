import { Login } from "./components/login.jsx";
import { Register } from "./components/register.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.scss";

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Register /> */}
    </div>
  );
}

export default App;
