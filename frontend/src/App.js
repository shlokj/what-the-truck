import { Login } from "./components/login.jsx";
import { SignUp } from "./components/signup.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.scss";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;
