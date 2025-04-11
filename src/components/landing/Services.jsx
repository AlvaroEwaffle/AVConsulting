import { CheckCircle2, Target, Users, Zap, Brain, LineChart, Shield, Clock, BookOpen, GraduationCap, Rocket, Globe } from 'lucide-react';

const benefits = [
    {
        icon: BookOpen,
        title: "Fundamentos de Innovación Digital",
        description: "Domina los conceptos esenciales de la transformación digital. Aprende sobre tendencias emergentes, tecnologías disruptivas y metodologías ágiles de innovación."
    },
    {
        icon: Brain,
        title: "Pensamiento Innovador",
        description: "Desarrolla habilidades de pensamiento crítico y creativo. Aprende técnicas para identificar oportunidades de innovación y resolver problemas complejos."
    },
    {
        icon: Rocket,
        title: "Estrategias de Transformación",
        description: "Comprende cómo las empresas líderes están transformando sus negocios. Analiza casos de estudio reales y aprende a aplicar estas estrategias en tu contexto."
    },
    {
        icon: Globe,
        title: "Ecosistema Digital",
        description: "Explora el panorama completo de la innovación digital. Desde blockchain hasta IA, comprende cómo estas tecnologías están redefiniendo los negocios."
    },
    {
        icon: GraduationCap,
        title: "Aprendizaje Continuo",
        description: "Adquiere las herramientas y mentalidad necesarias para mantenerte actualizado. Aprende a identificar y aprovechar nuevas oportunidades de aprendizaje."
    },
    {
        icon: Users,
        title: "Comunidad de Innovadores",
        description: "Conéctate con una red global de profesionales innovadores. Comparte conocimientos, colabora en proyectos y crece junto a otros agentes de cambio digital."
    }
];

const learningPath = [
    {
        title: "Nivel Básico",
        description: "Fundamentos de la innovación digital y transformación empresarial",
        duration: "4 semanas"
    },
    {
        title: "Nivel Intermedio",
        description: "Estrategias avanzadas y casos de estudio de empresas líderes",
        duration: "4 semanas"
    },
    {
        title: "Nivel Avanzado",
        description: "Proyectos prácticos y aplicación de metodologías innovadoras",
        duration: "4 semanas"
    }
];

export default function Services() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#2175a1] mb-4">
                        Tu Viaje hacia la Innovación Digital 🚀
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Un programa educativo diseñado para desarrollar tu capacidad de innovación y transformación digital. 
                        Aprende los fundamentos, domina las estrategias y prepárate para liderar el cambio en la era digital.
                    </p>
                </div>

                {/* Beneficios principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

                {/* Ruta de aprendizaje 
                <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
                    <h3 className="text-2xl font-bold text-[#2175a1] mb-6 text-center">
                        Tu Ruta de Aprendizaje 📚
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {learningPath.map((level, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl mb-4">🎯</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{level.title}</h4>
                                <p className="text-gray-600 mb-4">{level.description}</p>
                                <span className="text-sm text-[#2175a1] font-medium">{level.duration}</span>
                            </div>
                        ))}
                    </div>
                </div>*/}

                {/* Mensaje de cierre */}
                <div className="text-center">
                    <div className="inline-block bg-blue-50 rounded-lg p-6 max-w-2xl">
                        <h4 className="text-xl font-bold text-[#2175a1] mb-4">
                            El Aprendizaje Nunca Termina
                        </h4>
                        <p className="text-gray-600 mb-4">
                            La innovación digital es un viaje continuo. Nuestro programa te proporciona las bases sólidas y las herramientas necesarias para seguir aprendiendo y adaptándote a los cambios del futuro.
                        </p>
                        <div className="flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-[#2175a1] mr-2" />
                            <span className="text-[#2175a1] font-medium">
                                Acceso permanente a actualizaciones y nuevos contenidos
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
  