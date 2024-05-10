import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Indique que la requête est en cours

    try {
      const response = await axios.post('http://localhost:6000/router/login', {
        email,
        password,
      });

      setEmail('');
      setPassword('');
      setErrorMessage(null);
      setIsLoading(false);

      // Stocker le token en local storage (exemple)
      localStorage.setItem('token', response.data.token);

      // Rediriger vers la page d'accueil ou une autre page protégée
      window.location.href = '/'; // Remplacer par la route souhaitée
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setErrorMessage(error.response?.data?.message || 'Mot de Passe ou Email incorrect');
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="w-[350px] bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-medium py-4">Connexion</h2>

        <form onSubmit={handleSubmit}>
          <div className="px-4 py-2">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
            required
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="px-4 py-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isLoading ? 'Connexion...' : 'Se connecter'}
            </button>
          </div>
          {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
        </form>


        <div className="px-4 py-2 text-center">
          <p>Pas encore de compte ? <Link to="/signup" className="text-blue-500">S'inscrire</Link></p>
        </div>

        <div className="px-4 py-2 text-center">
          <button
            className="w-full py-2 px-4 justify-center bg-white border border-gray-300 text-gray-800 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center gap-3"
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
