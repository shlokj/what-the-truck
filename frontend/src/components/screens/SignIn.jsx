import "bootstrap/dist/css/bootstrap.css";
import { LoginSignupTab } from "../login_signup_tab.jsx";

const styles = {
  main: { display: "flex", margin: "auto" },
};

export default function SignIn() {
  return (
    <div className="SignIn">
      <LoginSignupTab />
    </div>
  );
}
