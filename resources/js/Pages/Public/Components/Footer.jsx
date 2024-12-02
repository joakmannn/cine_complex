import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white shadow-inner mt-8">
            <div className="container mx-auto py-6 flex flex-col items-center space-y-4">
                {/* Lien GitHub */}
                <a
                    href="https://github.com/joakmannn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition duration-200"
                >
                    <FaGithub className="text-2xl" />
                    <span className="text-sm font-semibold">
                        github.com/joakmannn
                    </span>
                </a>

                {/* Droits réservés */}
                <p className="text-gray-500 text-sm text-center">
                    © {new Date().getFullYear()} All rights reserved - <a href="https://ajd-world.com" className="hover:underline text-blue-600">ajd-world.com</a>
                </p>
            </div>
        </footer>
    );
}
