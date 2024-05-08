import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const handleLogin = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:6000/login', data);

      if (response.data.success) {
        // Successful login
        console.log('Connexion réussie !');

        // Store the JWT (or other authentication token) in local storage (securely)
        localStorage.setItem('authToken', response.data.token); // Example

        // Redirect to the home page programmatically using useNavigate
        navigate('/home');
      } else {
        console.error('Erreur de connexion:', response.data.message);
        // Affichez un message d'erreur à l'utilisateur
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      // Affichez un message d'erreur générique à l'utilisateur
    }
  };

  // Implement Google login logic here (optional)
  const handleGoogleLogin = () => {
    // ... your Google login implementation
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="w-[350px] bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-medium py-4">Connexion</h2>

        <form onSubmit={handleLogin}>
          <div className="px-4 py-2">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="px-4 py-3">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Se connecter
            </button>
          </div>
        </form>

        <div className="px-4 py-2 text-center">
          <p>Pas encore de compte ? <Link to="/signup" className="text-blue-500">S'inscrire</Link></p>
        </div>

        <div className="px-4 py-2 text-center">
          <button
            className="w-full py-2 px-4 justify-center bg-white border border-gray-300 text-gray-800 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center gap-3"
            onClick={handleGoogleLogin}
          >
            <FaGoogle className="text-[#DB4437]" />
            Se connecter avec Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
