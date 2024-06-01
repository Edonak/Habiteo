import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios'; // Re-introduced for API calls
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [connect, setConnect] = useState({ email: '', password: '' }); // Initial state for login credentials

  const handleChange = (event) => {
    setConnect({ ...connect, [event.target.name]: event.target.value }); // Update state with new values
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/router/login', data);

      // Handle successful login
      if (response.data.success) {
        localStorage.setItem('token', response.data.token); // Store token in local storage
        navigate('/protected-page'); // Redirect to a protected page (replace with your desired page)
      } else {
        // Display error message based on response.data.message (if provided)
        console.error('Login failed:', response.data.message);
        alert('Identifiants incorrects. Veuillez réessayer.'); // User-friendly error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.'); // Generic error message
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="w-[350px] bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-medium py-4">Connexion</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-4 py-2">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={connect.email}
              onChange={handleChange}
              required
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="px-4 py-2">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={connect.password}
              onChange={handleChange}
              required
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('password', { required: true, minLength: 8 })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.email.message}</p>} {/* Typo corrected */}
          </div>

          <div className="px-4 py-3">
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Se Connecter
            </button>
          </div>
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
