import { Instagram, Linkedin } from "lucide-react"; // Import icons

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-start text-left bg-[url('https://res.cloudinary.com/djcxabubg/image/upload/f_auto,q_auto/eqhdg8aobrn95kguc7hc')] bg-cover bg-left bg-no-repeat text-[#2175a1] px-8 md:px-16">
            <div className="max-w-3xl">
                {/* Título principal */}
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in">
                    Liderazgo Ágil para{" "}
                    <span className="text-[#3ca6dd]">Gerentes de Producto</span>
                </h1>

                {/* Subtítulo */}
                <p className="mt-4 text-lg md:text-xl opacity-90">
                    Te ayudo a <span className="font-bold">navegar el caos</span> del desarrollo digital con <br/>estrategia, herramientas y claridad.
                </p>

                {/* CTA Buttons Wrapper */}
                <div className="mt-18 flex flex-col gap-3 max-w-[300px]">
                    {/* Botón CTA Agendar Sesión */}
                    <a
                        href="https://www.fidelidapp.cl/agendas/67abf2bbe7a1676842463da7"
                        className="w-full text-center bg-[#2175a1] text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-[#3ca6dd] transition-transform transform hover:scale-105"
                    >
                        Agendar Sesión 🚀
                    </a>

                    {/* Botón CTA Servicios */}
                    <a
                        href="#sobremi"
                        className="w-full text-center bg-[#e6e6e6] font-bold py-3 px-6 rounded-lg border text-lg shadow-lg hover:bg-[#3ca6dd] transition-transform transform hover:scale-105"
                    >
                        Conoce más sobre mi 🔥
                    </a>
                </div>

                {/* Social Icons */}
                <div className="mt-18 flex gap-6 items-center">
                    <a href="https://instagram.com/chokovillena" target="_blank" rel="noopener noreferrer">
                        <Instagram size={32} strokeWidth={1.5} className="text-[#2175a1] hover:text-[#3ca6dd] transition" />
                    </a>
                    <a href="https://linkedin.com/in/alvarovillena" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={32} strokeWidth={1.5} className="text-[#2175a1] hover:text-[#3ca6dd] transition" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
