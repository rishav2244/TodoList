import { AuthContext } from "../context/AuthContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const {isLogged, logout} = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <header style={{ backgroundColor: "#282c34", padding: "1rem", color: "white" }}>
        <h1>Task Tracker</h1>
      </header>
      {isLogged && <button
      type="button"
      onClick={
        () => {
          logout();
          navigate("/login")
        }
      }>
        Log out
      </button>}
    </div>
  );
};
