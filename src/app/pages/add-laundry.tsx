import { useState } from 'react';

export default function AddLaundry() {
    const [pants, setPants] = useState(0);
    const [shirts, setShirts] = useState(0);
    const [date, setDate] = useState('');

    const handleAddLaundry = () => {
        // Implement logic to send the laundry data to the backend API
        // You can use Axios or Fetch for this purpose
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Laundry Record</h1>
            <form onSubmit={handleAddLaundry}>
                <div className="mb-4">
                    <label className="block text-gray-600">Number of Pants</label>
                    <input
                        type="number"
                        value={pants}
                        onChange={(e) => setPants(parseInt(e.target.value))}
                        className="border rounded w-16 py-1 px-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600">Number of Shirts</label>
                    <input
                        type="number"
                        value={shirts}
                        onChange={(e) => setShirts(parseInt(e.target.value))}
                        className="border rounded w-16 py-1 px-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border rounded w-40 py-1 px-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Record
                </button>
            </form>
        </div>
    );
}
