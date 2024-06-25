import React, { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [formIsInvalid, setFormIsInvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    // console.log(enteredEmail,enteredPassword);
    const emailIsInvalid = !enteredEmail.includes("@");
    console.log(emailIsInvalid)
    if (emailIsInvalid) {
      setFormIsInvalid(true);
      return;
    }

    setFormIsInvalid(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
          <div className="control-error">
            {formIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
