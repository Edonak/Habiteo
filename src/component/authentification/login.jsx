import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://capstone2-c1-edonak.onrender.com/router/login', data);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        navigate('/saleHouse');
      } else {
        console.error('Login failed:', response.data.message);
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  }
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="w-[350px] bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-medium py-4">Connexion</h2>

        <form onSubmit={onSubmit}>
          <div className="px-4 py-2">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
              name="password"
              required
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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






