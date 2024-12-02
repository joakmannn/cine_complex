import React from "react";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Seances from "./Components/Seances";
import Footer from "./Components/Footer";

export default function Home({ seances, films, tarifs }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Barre de navigation */}
            <Navigation />

            {/* Titre principal */}
            <header className="bg-white shadow-md py-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-extrabold text-gray-800">
                        Bienvenue chez Cinéma Complex
                    </h1>
                    <p className="text-xl text-gray-600 mt-4">
                        Réservez dès maintenant une séance dans un de nos cinémas et découvrez les
                        derniers films disponibles.
                    </p>
                </div>
            </header>

            {/* Contenu principal */}
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="container mx-auto my-8">
                    <Hero films={films} />
                </section>

                {/* Section des séances */}
                <section className="container mx-auto mb-8">
                    <Seances seances={seances} tarifs={tarifs} />
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
