import Link from 'next/link';

// Sample data (replace with actual data from the backend)
const laundryData = [
    { id: 1, pants: 3, shirts: 2, date: '2023-09-05' },
    { id: 2, pants: 1, shirts: 4, date: '2023-09-03' },
    // Add more laundry records here
];

export default function LaundryHistory() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Laundry History</h1>
            <Link href="/add-laundry">
                <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4">Add Laundry Record</a>
            </Link>
            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Pants</th>
                        <th className="border p-2">Shirts</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {laundryData.map((record) => (
                        <tr key={record.id}>
                            <td className="border p-2">{record.date}</td>
                            <td className="border p-2">{record.pants}</td>
                            <td className="border p-2">{record.shirts}</td>
                            <td className="border p-2">
                                {/* Add buttons for editing and deleting records */}
                                <button className="text-blue-500 hover:underline">Edit</button>
                                <button className="text-red-500 hover:underline ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
