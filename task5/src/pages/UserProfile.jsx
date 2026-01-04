import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const UserProfile = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <div>
      <h1>User Profile</h1>

      <p>Status: {isLogged ? "Logged in" : "Logged out"}</p>

      <p>Username: test user</p>
      <p>Login date: {new Date().toLocaleDateString()}</p>
    </div>
  );
};
