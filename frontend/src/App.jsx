import { useEffect, useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    profileRequest(token);
  },[])

  return (
    <>
    {auth ? <Profile/> : <Login/>}
    </>
  );
};

const profileRequest = async (token) => {
  const response = await fetch("http://localhost:5000/user/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok){
    const data = await response.json();
  } else {
    localStorage.removeItem('jid')
  }
}



export default App;
