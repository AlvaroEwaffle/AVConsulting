import { CheckCircle2, Target, Users, Zap, Brain, LineChart, Shield, Clock } from 'lucide-react';

const benefits = [
    {
        icon: Target,
        title: "Validación de Ideas",
        description: "Aprende a identificar oportunidades reales y validar tu idea con clientes potenciales antes de invertir tiempo y recursos."
    },
    {
        icon: Users,
        title: "Comunidad de Emprendedores",
        description: "Únete a una comunidad activa de emprendedores digitales, comparte experiencias y crea conexiones valiosas."
    },
    {
        icon: Zap,
        title: "Herramientas Prácticas",
        description: "Acceso a plantillas, frameworks y herramientas probadas para cada etapa de tu emprendimiento digital."
    },
    {
        icon: LineChart,
        title: "Estrategias de Crecimiento",
        description: "Aprende estrategias efectivas para hacer crecer tu negocio digital y alcanzar tus objetivos de ingresos."
    },
    {
        icon: Shield,
        title: "Reducción de Riesgos",
        description: "Minimiza los riesgos comunes del emprendimiento digital con metodologías probadas y validación continua."
    },
    {
        icon: Clock,
        title: "Ahorro de Tiempo",
        description: "Evita los errores comunes y acelera tu camino al éxito con un plan estructurado y probado."
    }
];

export default function Services() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#2175a1] mb-4">
                        ¿Qué Obtendrás con Digital Founders? 🎯
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Un programa completo diseñado para convertirte en un emprendedor digital exitoso, con herramientas prácticas y acompañamiento experto.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                            <div className="flex items-center mb-4">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <benefit.icon className="w-6 h-6 text-[#2175a1]" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                                    {benefit.title}
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-lg">
                        <CheckCircle2 className="w-6 h-6 text-[#2175a1] mr-2" />
                        <span className="text-[#2175a1] font-medium">
                            Acceso de por vida a todas las actualizaciones del programa
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
  