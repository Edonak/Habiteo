import React, { useState } from 'react';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement signup logic here
        console.log('Form submitted:', {
            name,
            username,
            email,
            password,
            phone,
            address,
            country,
        });
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
            <div className=" bg-white rounded-lg shadow-lg w-[30%]">
                <h2 className="text-center text-2xl font-medium py-4">Inscription</h2>

                <form onSubmit={handleSubmit}>
                    <div className="px-4">
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="px-4">
                        <label htmlFor="username" className="block text-sm font-medium mb-1">
                            Nom d'utilisateur
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="px-4">
                        <label htmlFor="address" className="block text-sm font-medium mb-1">
                            Adresse
                        </label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
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

