import { useState } from "react";
import './login.css';

const Login = () => {
	const [error, setError] = useState();

	return <div className='container'>
      <h1>Login</h1>
      <form onSubmit={ev => loginSubmit(ev, setError)} className='form'>
        {error && <div className='error'>
          {error}
          </div>}
        <label>
          <span>Email</span>
          <input type="text" name="email"></input>
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password"></input>
        </label>
        <button type='submit'>Iniciar sesión</button>
      </form>
    </div>;
}

const loginSubmit = async (ev, setError) => {
  setError();
  ev.preventDefault();

  const {email, password} = ev.target;

  const response = await fetch('http://localhost:5000/auth/login',{
    method: 'POST',
    body: JSON.stringify({
      email: email.value,
      password: password.value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok){ 
    const data = await response.json()
    
    localStorage.setItem('jid',data.token);
  } else {
    setError('Credenciales incorrectas');
  }
}

export default Login;