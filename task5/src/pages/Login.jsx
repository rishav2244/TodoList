import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import React from 'react'

export const Login = () => {
    const [user, setUser] = useState("");
    const [pw, setPw] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (user.trim() == "") {
            setErrMsg("Username Required");
            return;
        }
        else if (pw.length < 4) {
            setErrMsg("Password must be at least 4 characters");
            return;
        }
        else {
            setErrMsg("");
        }
        login();
        navigate("/tasks")
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "2rem auto" }}>
            <h2>Login</h2>
            {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}

            <input
                type="text"
                placeholder="Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <br /><br />

            <input
                type="password"
                placeholder="Password (min 4 chars)"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
            />
            <br /><br />

            <button
                type="submit">
                Login
            </button>
        </form>
    );
}