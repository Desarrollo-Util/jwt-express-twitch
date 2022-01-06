import { useEffect, useState } from "react";

export const useAuth = () => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    const token = localStorage.getItem("jid");

    if (token) profileRequest(token, setAuth);
    else
      setAuth({
        token: null,
        user: null,
      });
  }, [auth?.token]);

  return [auth, setAuth];
};

const profileRequest = async (token, setAuth) => {
  const response = await fetch("http://localhost:5000/user/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const user = await response.json();

    setAuth({
      jwt: token,
      user,
    });
  } else {
    setAuth({
      token: null,
      user: null,
    });
  }
};
