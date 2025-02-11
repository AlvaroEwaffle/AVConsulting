const About = () => {
    return (
      <section id="sobremi" className="w-full pt-50 h-screen px-8 md:px-16 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2175a1] leading-tight">
            Sobre <span className="text-[#3ca6dd]">Mí</span>
          </h2>
  
          {/* Descripción */}
          <p className="mt-4 text-lg md:text-xl text-[#2175a1] opacity-90">
            Soy <span className="font-bold">Álvaro Villena</span>, consultor en liderazgo y agilidad para el desarrollo de productos digitales.
            Ayudo a <span className="font-bold">gerentes de producto jóvenes</span> a convertirse en líderes estratégicos, tomar decisiones con confianza y desbloquear el máximo potencial de sus equipos.
          </p>
  
          {/* Bullet Points */}
          <ul className="mt-6 space-y-4 text-[#2175a1]">
            <li className="flex  space-x-3">
              <span className="text-[#fae713] text-2xl">✔️</span>
              <span className="text-lg md:text-xl">Más de 10 años en productos digitales</span>
            </li>
            <li className="flex  space-x-3">
              <span className="text-[#fae713] text-2xl">✔️</span>
              <span className="text-lg md:text-xl">Experiencia en startups y empresas consolidadas</span>
            </li>
            <li className="flex  space-x-3">
              <span className="text-[#fae713] text-2xl">✔️</span>
              <span className="text-lg md:text-xl">Mentorías personalizadas y hands-on</span>
            </li>
            <li className="flex  space-x-3">
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
      </section>
    );
  };
  
  export default About;
  