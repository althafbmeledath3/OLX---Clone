import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostCar = () => {
    const [formData, setFormData] = useState({
        brand: '',
        year: '',
        fuel: '',
        transmission: '',
        noOfOwners: '',
        adTitle: '',
        description: '',
        price: '',
    });
    const [images, setImages] = useState(Array(20).fill(null));
    const [location, setLocation] = useState({
        state: '',
        city: '',
        neighborhood: '',
    });

    const navigate = useNavigate();

    const states = [
        {
            name: 'Maharashtra',
            cities: [
                { name: 'Pune', neighborhoods: ['Koregaon Park', 'Hadapsar', 'Shivaji Nagar'] },
                { name: 'Mumbai', neighborhoods: ['Bandra', 'Andheri', 'Colaba'] },
            ],
        },
        {
            name: 'Karnataka',
            cities: [
                { name: 'Bangalore', neighborhoods: ['Koramangala', 'Indiranagar', 'Whitefield'] },
                { name: 'Mysore', neighborhoods: ['Vijayanagar', 'Kuvempunagar', 'Gokulam'] },
            ],
        },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFuelChange = (fuel) => {
        setFormData((prev) => ({ ...prev, fuel }));
    };

    const handleTransmissionChange = (transmission) => {
        setFormData((prev) => ({ ...prev, transmission }));
    };

    const handleImageChange = (index, e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImages((prev) => {
                const newImages = [...prev];
                newImages[index] = imageUrl;
                return newImages;
            });
        }
    };

    const removeImage = (index) => {
        setImages((prev) => {
            const newImages = [...prev];
            newImages[index] = null;
            return newImages;
        });
    };

    const handleLocationChange = (e) => {
        const { name, value } = e.target;
        if (name === 'state') {
            setLocation({ state: value, city: '', neighborhood: '' });
        } else if (name === 'city') {
            setLocation((prev) => ({ ...prev, city: value, neighborhood: '' }));
        } else {
            setLocation((prev) => ({ ...prev, neighborhood: value }));
        }
    };

    const handlePostAd = () => {
        console.log('Posting ad:', formData, images.filter((img) => img !== null), location);
    };

    return (
        <div className="flex justify-center p-4 bg-gray-100 min-h-screen">
            <div className="w-full max-w-md relative">
                <button
                    className="text-2xl focus:outline-none absolute -left-[390px] top-2 sm:-left-8"
                    onClick={() => navigate(-1)}
                >
                    ←
                </button>
                <div className="flex items-center mb-4">
                    <h1 className="text-lg font-bold uppercase">Post Your Ad</h1>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    {/* Selected Category Section */}
                    <div className="mb-4">
                        <h2 className="text-base font-bold uppercase p-2">Selected Category</h2>
                        <div className="flex justify-between items-center p-2">
                            <span className="text-sm text-gray-600">Cars / Cars</span>
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                                Change
                            </a>
                        </div>
                    </div>
                    {/* Include Some Details Section */}
                    <div className="mb-4">
                        <h2 className="text-base font-bold uppercase p-2">Include Some Details</h2>
                        <div className="p-2 space-y-4">
                            {/* Brand */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Brand *
                                </label>
                                <div className="relative">
                                    <select
                                        name="brand"
                                        value={formData.brand}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select Brand</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="Honda">Honda</option>
                                        <option value="Ford">Ford</option>
                                    </select>
                                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                        ▼
                                    </span>
                                </div>
                            </div>
                            {/* Year */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Year *
                                </label>
                                <input
                                    type="number"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleInputChange}
                                    placeholder="Enter Year"
                                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Fuel */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Fuel *
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {['CNG & Hybrids', 'Diesel', 'Electric', 'LPG', 'Petrol'].map((fuel) => (
                                        <button
                                            key={fuel}
                                            onClick={() => handleFuelChange(fuel)}
                                            className={`px-4 py-1 border rounded-md text-sm ${
                                                formData.fuel === fuel
                                                    ? 'bg-gray-200 border-gray-400'
                                                    : 'border-gray-300 hover:bg-gray-100'
                                            }`}
                                        >
                                            {fuel}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Transmission */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Transmission *
                                </label>
                                <div className="flex gap-2">
                                    {['Automatic', 'Manual'].map((transmission) => (
                                        <button
                                            key={transmission}
                                            onClick={() => handleTransmissionChange(transmission)}
                                            className={`px-4 py-1 border rounded-md text-sm ${
                                                formData.transmission === transmission
                                                    ? 'bg-gray-200 border-gray-400'
                                                    : 'border-gray-300 hover:bg-gray-100'
                                            }`}
                                        >
                                            {transmission}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Number of Owners */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Number of Owners *
                                </label>
                                <input
                                    type="number"
                                    name="noOfOwners"
                                    value={formData.noOfOwners}
                                    onChange={handleInputChange}
                                    placeholder="Enter Number of Owners"
                                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Ad Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Ad Title *
                                </label>
                                <input
                                    type="text"
                                    name="adTitle"
                                    value={formData.adTitle}
                                    onChange={handleInputChange}
                                    placeholder="Enter Ad Title"
                                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description *
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Enter Description"
                                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Set a Price Section */}
                    <div className="mb-4">
                        <h2 className="text-base font-bold uppercase p-2">Set a Price</h2>
                        <div className="p-2 space-y-4">
                            {/* Price */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Price *
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="₹ Enter Price"
                                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Upload Photos Section */}
                    <div className="mb-4">
                        <h2 className="text-base font-bold uppercase p-2">Upload Photos</h2>
                        <div className="p-2">
                            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                                {images.map((image, index) => (
                                    <div key={index} className="relative">
                                        {image ? (
                                            <div>
                                                <img
                                                    src={image}
                                                    alt={`Uploaded ${index + 1}`}
                                                    className="w-20 h-20 object-cover rounded-md"
                                                />
                                                <button
                                                    onClick={() => removeImage(index)}
                                                    className="absolute top-1 right-1 bg-gray-200 rounded-full p-1 text-xs"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ) : (
                                            <label className="flex flex-col items-center justify-center w-20 h-20 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleImageChange(index, e)}
                                                    className="hidden"
                                                />
                                                <span className="text-xl text-gray-500">📷</span>
                                                {index === 0 && (
                                                    <span className="text-xs text-gray-600 text-center">
                                                        Add Photos
                                                    </span>
                                                )}
                                            </label>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Confirm Your Location Section */}
                    <div className="mb-4">
                        <h2 className="text-base font-bold uppercase p-2">Confirm Your Location</h2>
                        <div className="p-2 space-y-4">
                            {/* State */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    State *
                                </label>
                                <div className="relative">
                                    <select
                                        name="state"
                                        value={location.state}
                                        onChange={handleLocationChange}
                                        className="w-full p-2 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select State</option>
                                        {states.map((state) => (
                                            <option key={state.name} value={state.name}>
                                                {state.name}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                        ▼
                                    </span>
                                </div>
                            </div>
                            {/* City */}
                            {location.state && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        City *
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="city"
                                            value={location.city}
                                            onChange={handleLocationChange}
                                            className="w-full p-2 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select City</option>
                                            {states
                                                .find((s) => s.name === location.state)
                                                ?.cities.map((city) => (
                                                    <option key={city.name} value={city.name}>
                                                        {city.name}
                                                    </option>
                                                ))}
                                        </select>
                                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                            ▼
                                        </span>
                                    </div>
                                </div>
                            )}
                            {/* Neighborhood */}
                            {location.city && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Neighborhood *
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="neighborhood"
                                            value={location.neighborhood}
                                            onChange={handleLocationChange}
                                            className="w-full p-2 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select Neighborhood</option>
                                            {states
                                                .find((s) => s.name === location.state)
                                                ?.cities.find((c) => c.name === location.city)
                                                ?.neighborhoods.map((neighborhood) => (
                                                    <option key={neighborhood} value={neighborhood}>
                                                        {neighborhood}
                                                    </option>
                                                ))}
                                        </select>
                                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                            ▼
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Post Your Ad Button */}
                    <div className="p-2">
                        <button
                            onClick={handlePostAd}
                            className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Post Your Ad
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCar;