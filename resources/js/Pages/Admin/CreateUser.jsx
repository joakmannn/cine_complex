import React from 'react';
import { useForm, Link } from '@inertiajs/react';

export default function CreateUser({ roles }) {
    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/users');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Créer un gérant</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium">Nom :</label>
                    <input
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block font-medium">Email :</label>
                    <input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="password" className="block font-medium">Mot de passe :</label>
                    <input
                        id="password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    />
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>

                <div>
                    <label htmlFor="password_confirmation" className="block font-medium">
                        Confirmer le mot de passe :
                    </label>
                    <input
                        id="password_confirmation"
                        type="password"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    />
                    {errors.password_confirmation && (
                        <p className="text-red-500">{errors.password_confirmation}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="role_id" className="block font-medium">Rôle :</label>
                    <select
                        id="role_id"
                        value={data.role_id}
                        onChange={(e) => setData('role_id', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    >
                        <option value="">Sélectionnez un rôle</option>
                        {roles
                            .filter((role) => role.label === 'Gérant')
                            .map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.label}
                                </option>
                            ))}
                    </select>
                    {errors.role_id && <p className="text-red-500">{errors.role_id}</p>}
                </div>

                <div className="flex items-center justify-between">
                    <Link
                        href="/admin/users"
                        className="inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    >
                        Retour
                    </Link>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Ajouter
                    </button>
                </div>
            </form>
        </div>
    );
}
