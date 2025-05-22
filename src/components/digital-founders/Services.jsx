import { CheckCircle2, Target, Users, Zap, Brain, LineChart, Shield, Clock, BookOpen, GraduationCap, Rocket, Globe } from 'lucide-react';

const benefits = [
    {
        icon: Target,
        title: "Diagnóstico Inicial",
        description: "Juntos analizaremos tu negocio o idea para descubrir exactamente dónde estás y hacia dónde quieres ir. Te mostraré las oportunidades que otros no ven y crearemos un plan claro para tu éxito digital."
    },
    {
        icon: Brain,
        title: "Estrategia Personalizada",
        description: "Diseñaré una estrategia única para ti, adaptada a tus objetivos, recursos y mercado. No es un plan genérico, es tu hoja de ruta personal hacia el éxito digital."
    },
    {
        icon: Users,
        title: "Desarrollo de Habilidades",
        description: "Te guiaré en el desarrollo de las habilidades clave que necesitas para liderar tu transformación digital. Aprenderás a pensar como un emprendedor digital exitoso."
    },
    {
        icon: Zap,
        title: "Aprendizaje de Herramientas",
        description: "Te enseñaré a dominar las herramientas digitales más efectivas para tu negocio. No solo aprenderás a usarlas, sino a aprovecharlas para crecer exponencialmente."
    },
    {
        icon: Shield,
        title: "Implementación Guiada",
        description: "Estaré a tu lado en cada paso de la implementación. Te ayudaré a evitar errores comunes y a acelerar tu camino hacia resultados tangibles."
    },
    {
        icon: Clock,
        title: "Seguimiento y Ajustes",
        description: "Monitorearemos juntos tu progreso y ajustaremos la estrategia según tus resultados. Tu éxito es mi prioridad, y trabajaremos hasta que lo logres."
    }
];

export default function Services() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#2175a1] mb-4">
                        Tu Camino hacia el Éxito Digital 🚀
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        No es solo un programa, es tu transformación personal. 
                        <br />
                        Te guiaré paso a paso para que construyas el negocio digital que siempre has soñado.
                    </p>
                </div>

                {/* Beneficios principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-[#3ca6dd] group">
                            <div className="flex items-center mb-4">
                                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-[#3ca6dd] group-hover:text-white transition-colors">
                                    <benefit.icon className="w-6 h-6 text-[#2175a1] group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 ml-3 group-hover:text-[#3ca6dd]">
                                    {benefit.title}
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mensaje de cierre */}
                <div className="text-center">
                    <div className="inline-block bg-blue-50 rounded-lg p-6 max-w-2xl">
                        <h4 className="text-xl font-bold text-[#2175a1] mb-4">
                            Tu Éxito es Mi Compromiso
                        </h4>
                        <p className="text-gray-600 mb-4">
                            No te dejaré solo en este viaje. Trabajaremos juntos hasta que veas los resultados que buscas. 
                            Tu transformación digital comienza con una simple conversación.
                        </p>
                        <div className="flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-[#2175a1] mr-2" />
                            <span className="text-[#2175a1] font-medium">
                                Agenda tu consulta gratuita hoy - Plazas limitadas
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
  