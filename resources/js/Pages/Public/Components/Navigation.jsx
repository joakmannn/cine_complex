import React from "react";
import { Link } from "@inertiajs/react";

export default function Navigation() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto p-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-black text-2xl font-extrabold tracking-wide">
                    <Link href="/" className="hover:text-gray-400 transition duration-200">
                        🎥 Cinéma Complex
                    </Link>
                </div>

                {/* Menu */}
                <div className="flex space-x-4">
                   
                    <Link
                        href="/login"
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md font-semibold shadow-md transition duration-200"
                    >
                        Se connecter
                    </Link>
                </div>
            </div>
        </nav>
    );
}
