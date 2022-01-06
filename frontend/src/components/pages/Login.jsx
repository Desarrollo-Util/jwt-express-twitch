import { useContext, useState } from "react";
import { AuthContext } from "../../lib/context/auth-context";
import "./login.css";

const Login = () => {
  const [error, setError] = useState();
  const { setAuth } = useContext(AuthContext);

  return (
    <div className="container">
      <h1>Login</h1>
      <form
        onSubmit={(ev) => loginSubmit(ev, setError, setAuth)}
        className="form"
      >
        {error && <div className="error">{error}</div>}
        <label>
          <span>Email</span>
          <input type="text" name="email"></input>
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password"></input>
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

const loginSubmit = async (ev, setError, setAuth) => {
  setError();
  ev.preventDefault();

  const { email, password } = ev.target;

  const response = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();

    localStorage.setItem("jid", data.token);

    setAuth({
      token: data.token,
    });
  } else {
    setError("Credenciales incorrectas");
  }
};

export default Login;
