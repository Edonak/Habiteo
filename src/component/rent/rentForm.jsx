import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function RentForm() {
    const schema = yup
        .object({
            name: yup
                .string()
                .max(50)
                .required("Veillez entrer votre nom"),
            email: yup
                .string()
                .email("Veillez saisir un email correct")
                .required("Veillez saisir votre email"),
            phone: yup
                .number()
                .typeError("Ecrivez un numéro valide")
                .required("Veillez entrer votre numéro"),
            message: yup
                .string()
                .required("Veillez saisir le texte"),
        })
    required()
    const [register,  errors , hundleSubmit] = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = () =>{
    alert("Merci d'avoir rempli le formulaire")
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 w-[30%]">
            <div className="bg-white rounded-lg shadow-lg w-[100%]">
                <h2 className="text-center text-2xl font-medium">Ecrire au Propiétaire</h2>

                <form onSubmit={hundleSubmit(onSubmit)} >
                    <div className="px-4">
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Nom
                        </label>
                        <input
                            name="nom"
                            type="text"
                            id="name"
                            {...register('name')}
                            required
                            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="">{errors.name.message}</p>}
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
                            {...register('email')}
                            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="">{errors.email.message}</p>}
                    </div>

                    <div className="px-4">
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                            Téléphone
                        </label>
                        <input
                            name="phone"
                            type="text"
                            id="phone"
                            required
                            {...register('phone')}
                            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.phone && <p className="">{errors.phone.message}</p>}
                    </div>

                    <div className="flex flex-col px-4">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea {...register('message')} className='border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' name="message" id="" cols="10" rows="5" placeholder='Ecrire votre message'  >

                        </textarea>
                        {errors.message && <p className="">{errors.message.message}</p>}
                    </div>

                    <div className='flex flex-col items-center'>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 my-4 rounded hover:bg-blue-600 "
                        >Envoyer Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
