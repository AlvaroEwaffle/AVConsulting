import { User, MessageCircle, Users, Briefcase, Settings, BarChart } from "lucide-react";

const Journey = () => {
    const steps = [
        { icon: User, title: "Conectemos", description: "Conoce mi enfoque y descubre cómo podemos trabajar juntos para impulsar tu proyecto." },
        { icon: MessageCircle, title: "Primera Sesión (Gratis)", description: "Una conversación estratégica para entender tus desafíos y definir un plan de acción claro." },
        { icon: Users, title: "Acompañamiento Emprendedor", description: "Recibe mentorías para estructurar tu negocio, validar tu idea y acelerar tu crecimiento." },          
        { icon: Briefcase, title: "Trabajo con tu Equipo (Opcional)", description: "Si lo necesitas, expandimos el impacto y trabajamos directamente con tu equipo." },
        { icon: Settings, title: "Plan a Medida", description: "Diseñamos una estrategia concreta y alineada con tus objetivos de negocio." },
        { icon: BarChart, title: "Implementación y Crecimiento", description: "Pasamos a la acción, medimos resultados y ajustamos para seguir avanzando." },
    ];
    

    return (
        <section id="journey" className="py-16 bg-[#e6e6e6] text-[#2175a1]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-12">Tu Camino hacia el Éxito 🚀</h2>

                {/* Tarjetas en full-width */}
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className="flex items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.02] px-6 py-6"
                        >
                            {/* Número en un círculo */}
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#3ca6dd] text-white rounded-full shadow-md text-xl font-bold mr-6">
                                {index + 1}
                            </div>

                            {/* Contenido de la tarjeta */}
                            <div className="flex-1 text-left">
                                <h3 className="text-2xl font-bold">{step.title}</h3>
                                <p className="text-lg opacity-90">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
