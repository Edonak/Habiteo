import React, { useState } from 'react';
import axios from 'axios'

const SignupPage = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [object, setObject] = useState('')

  const values = {
    name, 
    lastName,
    email,
    password,
    phone, 
    object
  }
  console.log(values)
  // function getEnty(value) {
  //   console.log(value)
  // }
  // const [register, setRegister] = useState();
  // const handleInput = (e) => {
  //   console.log("e", e)
  //   // setRegister({ ...register, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let entityType = e.target[5].value
  //   const data = {
  //     ...register,
  //     entityType
  //   }
  //   console.log("e", data);

  //   await axios.post('http://localhost:6000/router/register', register)
  //     .then((Response) => console.log("Responsee", Response))
  //     .catch((error) => console.log("error", error))


  //   // Code à ajouter pour gérer la réponse positive (ex: message de succès)


  // // };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-[30%]">
        <h2 className="text-center text-2xl font-medium py-4">Inscription</h2>

        <form >
          <div className="px-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom
            </label>
            <input
              name="nom"
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="px-4">
            <label htmlFor="prenom" className="block text-sm font-medium mb-1">
              Prénom
            </label>
            <input
              name="prenom"
              type="text"
              id="lastname"
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="px-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
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
              name="password"
              type="password"
              id="password"
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
              name="telephone"
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col px-4">
            <label htmlFor="entityType" className="text-sm font-medium text-gray-700">
              Type d'entité
            </label>
            <select onChange={(e) => setObject(e.target.value)} id="entityType" name="entityType" className="rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option name="entityType" value="Locataire" >Locataire</option>
              <option name="entityType" value="Bailleur">Bailleur</option>
            </select>
          </div>

          <div className='flex flex-col items-center'>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 my-4 rounded hover:bg-blue-600 "
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignupPage;

