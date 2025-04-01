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
            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-7xl mx-auto transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            >
                <div className="md:col-span-2 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2175a1] leading-tight">
                        ¿Qué es <span className="text-[#3ca6dd]">Digital Founders</span>?
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-[#2175a1] opacity-90">
                        Digital Founders es un programa de acompañamiento diseñado para ayudarte a lanzar tu negocio digital desde cero, sin experiencia previa. Te guiaré en todo el proceso: desde encontrar una idea con potencial, validarla con clientes reales, diseñar un modelo de negocio rentable, hasta implementar tu solución de forma práctica.
                        <br /> <br />
                        Este no es otro curso teórico: aquí trabajamos con herramientas reales, ejercicios aplicables y estrategias claras.
                    </p>
                    <ul className="mt-6 space-y-4 text-[#2175a1]">
                        <li className="flex space-x-3">
                            <span className="text-[#fae713] text-2xl">✔️</span>
                            <span className="text-lg md:text-xl">Ideal para emprendedores que quieren empezar desde cero</span>
                        </li>
                        <li className="flex space-x-3">
                            <span className="text-[#fae713] text-2xl">✔️</span>
                            <span className="text-lg md:text-xl">Freelancers y profesionales buscando crear su solución digital</span>
                        </li>
                        <li className="flex space-x-3">
                            <span className="text-[#fae713] text-2xl">✔️</span>
                            <span className="text-lg md:text-xl">Emprendedores que necesitan estructura y guía</span>
                        </li>
                    </ul>
                    <div className="mt-8">
                        <a
                            href="https://www.fidelidapp.cl/agendas/67abf2bbe7a1676842463da7"
                            className="inline-block bg-[#2175a1] text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-[#3ca6dd] transition-transform transform hover:scale-105"
                        >
                            Inscríbete al programa  🚀
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <iframe
                        width="300"
                        height="530"
                        src="https://youtube.com/embed/6NkaZ4ladjM?si=yR1UBYehk1P2DeR_"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className={`rounded-lg shadow-lg transition-opacity duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default About;
