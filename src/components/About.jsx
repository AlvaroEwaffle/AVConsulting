import { useEffect, useState } from "react";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 } // Se activa cuando el 30% del componente es visible
        );

        const section = document.getElementById("sobremi");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="sobremi"
            className="w-full pt-20 mb-20 px-8 md:px-16 flex items-center justify-center"
        >
            {/* Grid layout */}
            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                    }`}
            >
                {/* Left Column (2/3) */}
                <div className="md:col-span-2 flex flex-col justify-center">
                    {/* Título */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2175a1] leading-tight">
                        Sobre <span className="text-[#3ca6dd]">Mí</span>
                    </h2>

                    {/* Descripción */}
                    <p className="mt-4 text-lg md:text-xl text-[#2175a1] opacity-90">
                        Soy <span className="font-bold">Álvaro Villena</span>, emprendedor, consultor en estrategia e innovación y creador de Fidelidapp.
                        <br /> <br />
                        Ayudo a emprendedores, freelancers y creadores de productos digitales a estructurar sus ideas, desarrollar modelos de negocio y lanzar servicios o apps con estrategia y validación.
                    </p>

                    {/* Bullet Points */}
                    <ul className="mt-6 space-y-4 text-[#2175a1]">
                        <li className="flex space-x-3">
                            <span className="text-[#fae713] text-2xl">✔️</span>
                            <span className="text-lg md:text-xl"> +10 años creando y escalando negocios digitales
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <span className="text-[#fae713] text-2xl">✔️</span>
                            <span className="text-lg md:text-xl">Experiencia en corporaciones, startups, innovación y agilidad</span>
                        </li>
                        <li className="flex space-x-3">
                            <span className="text-[#fae713] text-2xl">✔️</span>
                            <span className="text-lg md:text-xl">Mentorías prácticas, personalizadas y basadas en ejecución</span>
                        </li>
                        <li className="flex space-x-3">
                            <span className="text-[#fae713] text-2xl">✔️</span>
                            <span className="text-lg md:text-xl">Ingeniero Civil Industrial, Master en Innovación y Emprendimiento</span>
                        </li>
                    </ul>
                    

                    {/* CTA */}
                    <div className="mt-8">
                        <a
                            href="#servicios"
                            className="inline-block bg-[#2175a1] text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-[#3ca6dd] transition-transform transform hover:scale-105"
                        >
                            Aprende a construir un negocio digital sólido desde cero 🚀
                        </a>
                    </div>
                </div>

                {/* Right Column (1/3) */}
                <div className="flex items-center justify-center">
                    <img
                        src="https://res.cloudinary.com/djcxabubg/image/upload/f_auto,q_auto/pupbwxlduzs1cs6cvofd"
                        alt="Álvaro Villena"
                        loading="lazy"
                        className={`w-64 h-64 md:w-90 md:h-120 object-cover rounded-full shadow-lg transition-opacity duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
