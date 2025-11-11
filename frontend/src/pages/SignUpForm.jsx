import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault();
    

    try {
      const res = await fetch("https://hotel-booking-backend-1-7kkx.onrender.com/signup", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (!res.ok) throw new Error("Signup failed!")

      const data = await res.json();
      console.log("Signup Successful", data);
      alert("Signup Successful, Please Login");
      navigate("/login")
    } catch (error) {
        console.error(error);
        alert("Something went wrong during the signup")
    };
}

    return (
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <input
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-3 border rounded-lg"
          required
        />
        <input
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
          Sign Up
        </button>
        <p className="py-4 text-sm flex justify-center">Already have an Account? <a href="/login" className="text-blue-400 px-1">Login</a></p>
      </form>
    </div>
  );
};

export default SignUpForm;
    