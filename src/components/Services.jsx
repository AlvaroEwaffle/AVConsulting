const services = [
    {
      title: "Agilidad para Productos",
      description:
        "Optimiza tu flujo de trabajo con frameworks y prácticas ágiles, asegurando entregas eficientes y equipos alineados.",
      icon: "🚀",
    },
    {
      title: "Liderazgo con Propósito",
      description:
        "Potencia tu rol como Product Manager con estrategias clave para tomar decisiones con confianza.",
      icon: "🎯",
    },
    {
      title: "Innovación Estratégica",
      description:
        "Transforma ideas en productos rentables con tácticas de validación y experimentación rápida.",
      icon: "💡",
    },
    {
      title: "Mentoría 1:1",
      description:
        "Sesiones personalizadas para ayudarte a desbloquear tu máximo potencial en el mundo digital.",
      icon: "📚",
    },
  ];
  
  const Services = () => {
    return (
        <section id="servicios" className="w-full bg-[#e6e6e6]   px-8 md:px-16 flex flex-col items-center text-center">
        {/* Título */}
        <div className="text-center ">
          <h2 className="text-4xl mt-15 md:text-5xl font-extrabold text-[#2175a1] leading-tight">
            Mis <span className="text-[#3ca6dd]">Servicios</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#2175a1] opacity-90">
            Estrategias y mentorías para impulsar tu crecimiento 🚀
          </p>
        </div>
  
        {/* Grid de servicios */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="mt-4 text-2xl font-bold text-[#2175a1]">{service.title}</h3>
              <p className="mt-2 text-lg text-[#2175a1] opacity-80">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  