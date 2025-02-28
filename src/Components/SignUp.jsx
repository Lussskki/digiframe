import "./CSS/Auth/LogIn.css";
import Form from "./Form";

const SignUp = () => {
  return (
    <div className="authForm-container">
      <img width={"300px"} src="/assets/digiLogo.png" alt="digiframe logo" />

      <Form SignUp={true} />
    </div>
  );
};

export default SignUp;
