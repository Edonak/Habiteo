import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  // 
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [entityType, setEntityType] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Indique que la requête est en cours

    try {
      const response = await axios.post('http://localhost:6000/router/register', {
        nom,
        prenom,
        email,
        telephone,
        password,
        entityType,
      });

      setNom(' ');
      setPrenom(' ');
      setEmail(' ');
      setTelephone(' ');
      setPassword(' ');
      setEntityType(' ');
      setErrorMessage(null);
      setIsLoading(false);

      // Stocker le token en local storage (exemple)
      localStorage.setItem('token', response.data.token);
      console.log(response.data)
      // Rediriger vers la page de connexion ou une autre page
      window.location.href = '/form'; // Remplacer par la route souhaitée
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setErrorMessage(error.response?.data?.message || 'Une erreur est survenue');
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-[30%]">
        <h2 className="text-center text-2xl font-medium py-4">Inscription</h2>

        <form onSubmit={handleSubmit}>
          <div className="px-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="px-4">
            <label htmlFor="prenom" className="block text-sm font-medium mb-1">
              Prénom
            </label>
            <input
              type="text"
              id="lastname"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="px-4">
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

          <div className="px-4">
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

          <div className="px-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Téléphone
            </label>
            <input
              type="text"
              id="phone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col px-4">
        <label htmlFor="entityType" className="text-sm font-medium text-gray-700">Type d'entité</label>
        <select
          id="entityType"
          value={entityType}
          onChange={(e) => setEntityType(e.target.value)}
          required
          className="rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="Locataire">Locataire</option>
          <option value="Bailleur">Bailleur</option>
        </select>
      </div>

          <div className='flex flex-col items-center'>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 text-white py-2 px-4 my-4 rounded hover:bg-blue-600 "
            >
              {isLoading ? 'Inscription en cours...' : `S'inscrire`}
            </button>
          </div>
          {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}
export default SignupPage;

