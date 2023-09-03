import Link from 'next/link';

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to Laundry App</h1>
            <p className="mb-4">Manage your laundry records with ease.</p>
            <Link href="/add-laundry">
                <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Laundry Record</a>
            </Link>
            <Link href="/laundry-history">
                <a className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Laundry History</a>
            </Link>
        </div>
    );
}
