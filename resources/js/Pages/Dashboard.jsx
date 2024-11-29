import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <p>Bienvenue sur le tableau de bord !</p>

                            {/* Ajout du bouton pour accéder à Cinémas */}
                           
                            
                            <Link
                                href="/admin/users"
                                className="ml-10 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
                            >
                                Gérants
                            </Link>


                            <Link
                                href="/cinemas"
                                className="ml-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
                            >
                                Cinémas
                            </Link>

                            <Link
                                href="/films"
                                className="ml-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
                            >
                                Films
                            </Link>

                            <Link
                                href="/seances"
                                className="mt-4 ml-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
                            >
                                Séances
                            </Link>

                            <Link
                                href="/reservations"
                                className="mt-4 ml-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
                            >
                                Réservations
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
