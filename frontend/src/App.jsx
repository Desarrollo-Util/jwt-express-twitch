import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import { AuthContext } from "./lib/context/auth-context";
import { useAuth } from "./lib/hooks/use-auth";

const App = () => {
  const [auth, setAuth] = useAuth();

  if (!auth) return <span>Loading...</span>;

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {auth.user ? <Profile /> : <Login />}
    </AuthContext.Provider>
  );
};

export default App;
