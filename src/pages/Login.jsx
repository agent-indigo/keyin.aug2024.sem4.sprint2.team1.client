import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling login here
    console.log('Login Data:', { email, password });

    // Assuming login is successful 
    navigate('/account');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#D8D7D7]">
      <div className="w-full max-w-md p-8 space-y-10 bg-white shadow-md rounded-lg">
        <h2 className="text-4xl text-[#040200] text-center">LOGIN</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <label htmlFor="email" className="w-1/3 text-xl text-[#040200]">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="password" className="w-1/3 text-xl text-[#040200]">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              className="w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-xl text-[#5595AC] bg-[#040200] rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            Login
          </button>
        </form>
        <p className="text-md text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="text-[#5595AC] hover:underline">Sign up here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;

