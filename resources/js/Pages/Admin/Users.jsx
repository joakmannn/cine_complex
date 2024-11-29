import React from 'react';
import { Link } from '@inertiajs/react';

export default function Users({ users }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des utilisateurs</h1>

            <Link
                href="/admin/users/create"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                Ajouter un utilisateur
            </Link>
            <Link
                href="/dashboard"
                className="bg-gray-500 ml-4 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Retour
            </Link>
            

            <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Nom</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Rôle</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                {user.roles.map((role) => role.label).join(', ')}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
