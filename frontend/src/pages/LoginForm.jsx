import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://hotel-booking-backend-1-7kkx.onrender.com/api/login", {
        method: "POST",
        headers:{ 
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password})
      });

      if (!res.ok) throw new Error("Invalid credentials")

      const data = await res.json()
      login(data);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Login Failed. Please check your credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <input
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-3 border rounded-lg"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-3 border rounded-lg"
          required
        />
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
          Log In
        </button>
        <p className="py-4 text-sm flex justify-center">Don't have an Account? <a href="/signup" className="text-blue-400 px-1">Create Account</a></p>
      </form>
    </div>
  );
};

export default LoginForm;
