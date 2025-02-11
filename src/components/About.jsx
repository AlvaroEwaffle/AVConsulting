const About = () => {
    return (
        <section id="sobremi" className="w-full pt-20 mb-20 px-8 md:px-16 flex items-center justify-center">
            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">

                {/* Left Column (2/3) */}
                <div className="md:col-span-2 flex flex-col justify-center">
                    {/* Título */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2175a1] leading-tight">
                        Sobre <span className="text-[#3ca6dd]">Mí</span>
                    </h2>

                    {/* Descripción */}
                    <p className="mt-4 text-lg md:text-xl text-[#2175a1] opacity-90">
                        Soy <span className="font-bold">Álvaro Villena</span>, consultor en liderazgo y agilidad para el desarrollo de productos digitales.
                        <br /> <br />
                        Ayudo a <span className="font-bold">gerentes de producto </span> a convertirse en líderes estratégicos, tomar decisiones con confianza y desbloquear el máximo potencial de sus equipos.
                    </p>

                    {/* Bullet Points */}
                    <ul className="mt-6 space-y-4 text-[#2175a1]">
                        <li className="flex space-x-3">
                            <span className="text-[#fae713] text-2xl">✔️</span>
                            <span className="text-lg md:text-xl">Más de 10 años de trabajando en el mundo digital</span>
                        </li>
                        <li className="flex space-x-3">
                            <span className="text-[#fae713] text-2xl">✔️</span>
                            <span className="text-lg md:text-xl">Experiencia en startups y empresas consolidadas</span>
                        </li>
                        <li className="flex space-x-3">
                            <span className="text-[#fae713] text-2xl">✔️</span>
                            <span className="text-lg md:text-xl">Mentorías personalizadas y hands-on</span>
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
                            Descubre mis servicios 🔥
                        </a>
                    </div>
                </div>

                {/* Right Column (1/3) */}
                <div className="flex items-center justify-center">
                    <img
                        src="/about.jpeg"
                        alt="Álvaro Villena"
                        className="w-64 h-64 md:w-90 md:h-120 object-cover rounded-full shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default About;
