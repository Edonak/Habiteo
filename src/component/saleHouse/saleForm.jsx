import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SaleForm = () => {
    // const handlePhotoChange = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //         setShowForm(URL.createObjectURL(event.target.files[0]));
    //       }
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Form submitted:', {
    //         commune,
    //         rooms,
    //         photo,
    //     });
    // };

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            (console.log(data))
            console.log(data);
            await axios.post('http://localhost:3000/router/house', data)
            console.log('Response', Response.data);
        }
        catch (error) {
            console.log("error", error)
        }
    }


    //     "userId":1,
    //    "id":1,
    //     "adresse":"17 bbiuzouz",
    //     "surface":"1456497km",
    //     "prix":"500$",
    //     "nombreDePiece":4,
    //     "photoUrl":"qhguizupipz",
    //     "disponibilite":true,
    //     "houseType":"Location",
    //     "proprietaire":"hjgsihpz"
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto mt-4" >
            <div className="mb-4">
                <label htmlFor="id" className="block text-gray-700 text-sm font-bold mb-2">
                    Id Utilisateur
                </label>
                <input
                    type="number"
                    id="id"
                    name="id"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("userId", {
                        required: true,
                    })}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                    Adresse Maison
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"

                    {...register("adresse", {
                        required: true,
                    })} />
            </div>
            <div className="mb-4">
                <label htmlFor="prix" className="block text-gray-700 text-sm font-bold mb-2">
                    Prix
                </label>
                <input
                    type="number"
                    id="prix"
                    name="prix"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("prix", {
                        required: true,
                    })}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="rooms" className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre de pièces
                </label>
                <input
                    type="number"
                    id="rooms"
                    name="rooms"
                    {...register("nombreDePiece", {
                        required: true,
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
                    Photo
                </label>
                <input
                    type="file"
                    id="photo"
                    name="photo"
                    {...register("photoUrl", {
                        required: true,
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="houseType" className="block text-gray-700 text-sm font-bold mb-2">
                    Type de maison
                </label>
                <select id="houseType" name="houseType"  {...register("houseType", {
                    required: true,
                })} className="rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <option name="houseType" value="Location" >Location</option>
                    <option name="houseType" value="Vente">Vente</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="propriétaire" className="block text-gray-700 text-sm font-bold mb-2">
                    Propriétaire
                </label>
                <input
                    type="text"
                    id="propriétaire"
                    name="propriétaire"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"

                    {...register("proprietaire", {
                        required: true,
                    })} />
            </div>
            <div className="mb-4">
                <label htmlFor="surface" className="block text-gray-700 text-sm font-bold mb-2">
                    Surface
                </label>
                <input
                    type="text"
                    id="surface"
                    name="surface"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"

                    {...register("surface", {
                        required: true,
                    })} />
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                Envoyer
            </button>
        </form>
    );
};

export default SaleForm;
