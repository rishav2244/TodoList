import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const { login } = useContext(AuthContext);
  const { currTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.trim() === "") {
      setErrMsg("Username Required");
      return;
    } else if (pw.length < 4) {
      setErrMsg("Password must be at least 4 characters");
      return;
    } else {
      setErrMsg("");
    }

    login();
    navigate("/dashboard/tasks");
  };

  return (
    <form className={`login-form ${currTheme}`} onSubmit={handleSubmit}>
      <h2>Login</h2>

      {errMsg && <p className="login-error">{errMsg}</p>}

      <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password (min 4 chars)"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
};
