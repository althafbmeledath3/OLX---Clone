import React from "react";

const Profile = () => {
    const user = {
        name: "John Doe",
        location: "Pune, Maharashtra",
    };

    const dummyAds = [
        {
            id: 1,
            brand: "Toyota",
            year: 2019,
            price: "₹ 8,50,000",
            location: "Koregaon Park, Pune",
            image: null, // Placeholder for image
        },
        {
            id: 2,
            brand: "Honda",
            year: 2021,
            price: "₹ 12,00,000",
            location: "Bandra, Mumbai",
            image: null,
        },
        {
            id: 3,
            brand: "Ford",
            year: 2020,
            price: "₹ 9,75,000",
            location: "Koramangala, Bangalore",
            image: null,
        },
        {
            id: 4,
            brand: "Hyundai",
            year: 2018,
            price: "₹ 6,20,000",
            location: "Hadapsar, Pune",
            image: null,
        },
    ];

    return (
        <div className="flex justify-center p-4 bg-gray-100 min-h-screen">
            <div className="w-full w-[65%] flex flex-col lg:flex-row gap-6">
                {/* Profile Section (Left) */}
                <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-6">
                    <div className="flex flex-col items-center lg:items-start space-y-4">
                        {/* Profile Picture Placeholder */}
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl">
                            JD
                        </div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-xl font-bold uppercase">{user.name}</h1>
                            <p className="text-sm text-gray-600">{user.location}</p>
                            <a href="#" className="text-sm text-blue-600 hover:underline mt-2 inline-block">
                                Edit Profile
                            </a>
                        </div>
                    </div>
                </div>

                {/* Ad Cards Section (Right) */}
                <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-base font-bold uppercase mb-4">My Ads</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {dummyAds.map((ad) => (
                            <div
                                key={ad.id}
                                className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                            >
                                {/* Ad Image Placeholder */}
                                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                                    {ad.image ? (
                                        <img
                                            src={ad.image}
                                            alt={`${ad.brand} ${ad.year}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) : (
                                        <span className="text-2xl">📷</span>
                                    )}
                                </div>
                                {/* Ad Details */}
                                <h3 className="text-lg font-semibold">{`${ad.year} ${ad.brand}`}</h3>
                                <p className="text-sm font-medium text-gray-900">{ad.price}</p>
                                <p className="text-sm text-gray-500 mt-1">{ad.location}</p>
                                <div className="flex justify-between mt-4">
                                    <button className="text-sm text-blue-600 hover:underline">
                                        Edit
                                    </button>
                                    <button className="text-sm text-red-600 hover:underline">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;