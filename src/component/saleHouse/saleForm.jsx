import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

const SaleForm = ({showForm, setShowForm }) => {
    const [commune, setCommune] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [rooms, setRooms] = useState('');
    const [photo, setPhoto] = useState(null);
    const [details, setDetails] = useState('');
    const [communesList, setCommunesList] = useState(["Bandalungwa", "Barumbu", "Bumbu", "Gombe", "Kalamu", "Kasa-Vubu", "Kimbanseke", "Kinshasa", "Kintambo", "Kisenso", "Lemba", "Limete", "Lingwala", "Makala", "Maluku", "Masina", "Matete", "Mont-Ngafula", "N'djili", "Ngaba", "Ngaliema", "Ngiri-Ngiri", "Selembao"]);

    const handlePhotoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setShowForm(URL.createObjectURL(event.target.files[0]));
          }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', {
            commune,
            rooms,
            photo,
        });
    };

    return (
        <form className="w-full max-w-sm mx-auto mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Nom
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                    Adresse
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="commune" className="block text-gray-700 text-sm font-bold mb-2">
                    Commune
                </label>
                <select
                    id="commune"
                    name="commune"
                    value={commune}
                    onChange={(event) => setCommune(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {communesList.map((commune) => (
                        <option key={commune} value={commune}>
                            {commune}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="rooms" className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre de pièces
                </label>
                <input
                    type="number"
                    id="rooms"
                    name="rooms"
                    value={rooms}
                    onChange={(event) => setRooms(event.target.value)}
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
                    onChange={handlePhotoChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {photo && (
                    <img src={photo} alt="Uploaded photo" className="mt-2 w-20 h-20 rounded-lg" />
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="details" className="block text-gray-700 text-sm font-bold mb-2">
                    Détails
                </label>
                <textarea
                    id="details"
                    name="details"
                    value={details}
                    onChange={(event) => setDetails(event.target.value)}
                    className="shadow"></textarea>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                Envoyer
            </button>
        </form>
    );
};

export default SaleForm;
