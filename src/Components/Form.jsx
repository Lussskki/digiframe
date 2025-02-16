import { Link } from "react-router-dom";

const Form = ({ SignUp }) => {
  return (
    <div className="form-container">
      <h1 style={{ color: "171A1F", textAlign: "start", fontWeight: "300" }}>
        {SignUp ? <p>Create Account</p> : <p>Login</p>}
        {!SignUp && (
          <p style={{ fontSize: "15px" }}>
            Please enter your login data to log in
          </p>
        )}
      </h1>
      <div className="inputs-container">
        <div className="name-LastName">
          {SignUp && (
            <span style={{ width: "200px" }}>
              <span style={{ marginLeft: "10px" }}>Firstname</span>
              <input placeholder="Enter Your Firstname" type="text" />
            </span>
          )}
          {SignUp && (
            <span style={{ width: "200px" }}>
              <span style={{ marginLeft: "10px" }}>Lastname</span>
              <input placeholder="Enter Your Lastname" type="text" />
            </span>
          )}
        </div>
        <div style={{ width: "100%" }}>
          <span style={{ marginLeft: "10px" }}>Email</span>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div style={{ width: "100%" }}>
          <span style={{ marginLeft: "10px" }}>Password</span>
          <input type="text" placeholder="Create password" />
        </div>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <input className="checkboxInput" type="checkbox" />
          {SignUp && (
            <p style={{ width: "100%" }}>
              {" "}
              You agree to our{" "}
              <span style={{ textDecoration: "underline" }}>Terms</span>,{" "}
              <span style={{ textDecoration: "underline" }}>
                Privacy & Policy
              </span>{" "}
              and{" "}
              <span style={{ textDecoration: "underline" }}>
                Cookies Policy
              </span>
            </p>
          )}
          {!SignUp && (
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Keep me Logged In</p>
            </div>
          )}
        </div>
      </div>
      <div className="buttons-container">
        <button>Create Account</button>
        <button>Sign Up With Google</button>
      </div>
      {!SignUp && (
        <p style={{ textAlign: "center" }}>
          Already Have an Account?{" "}
          <Link
            to="/log-in"
            style={{
              color: "black",
              textDecoration: "none",
              marginLeft: "30px",
            }}
          >
            LogIn
          </Link>
        </p>
      )}
    </div>
  );
};

export default Form;
