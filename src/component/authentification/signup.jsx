import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate();

  // function getEnty(value) {
  //   console.log(value)
  // }

  // const handleInput = (e) => {
  //   console.log("e", e)
  //   // setRegister({ ...register, [e.target.name]: e.target.value });
  // };
  const onSubmit = async (data) => {
try{(console.log(data))
    console.log(data);
    await axios.post('http://localhost:3000/router/register', data)
    console.log("Response", Response.data)
    navigate('/saleHouse');
  }
      
      catch (error) {
    console.log("error", error);
  }
};

return (
  <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
    <div className="bg-white rounded-lg shadow-lg w-[30%]">
      <h2 className="text-center text-2xl font-medium py-4">Inscription</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nom
          </label>
          <input
            name="nom"
            type="text"
            id="name"
            required
            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("nom", {
              required: true,
            })}
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
            required
            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("prenom", {
              required: true,
            })}
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
            required
            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: true,
            })}
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
            required
            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: true,
            })}
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
            required
            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("telephone", {
              required: true,
            })}
          />
        </div>

        <div className="flex flex-col px-4">
          <label htmlFor="entityType" className="text-sm font-medium text-gray-700">
            Type d'entité
          </label>
          <select id="entityType" name="entityType"  {...register("entityType", {
            required: true,
          })} className="rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500">
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

