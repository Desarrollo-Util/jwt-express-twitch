import { useContext } from "react";
import { AuthContext } from "../../lib/context/auth-context";

const Profile = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <h1>Mi perfil</h1>
      <p>{auth.user.name}</p>
      <p>{auth.user.email}</p>
    </div>
  );
};

export default Profile;
