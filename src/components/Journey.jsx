import { Lightbulb, Search, ChartBar, Settings, LineChart, PiggyBank, Calculator } from "lucide-react";

const Journey = () => {
    const modules = [
        {
            icon: Lightbulb,
            title: "Módulo 1: Propuesta de valor",
            description: "Descubre cómo transformar tu idea en una propuesta de valor irresistible. Aprende a identificar problemas reales y crear soluciones que tus clientes no podrán resistir.",
            topics: [
                "Cómo definir una idea ganadora",
                "Canva de propuesta de valor",
                "Value Proposition Canva",
                "Redacción de una propuesta de valor",
                "Identificación de problemas reales"
            ]
        },
        {
            icon: Search,
            title: "Módulo 2: Validación y testeo",
            description: "Evita costosos errores validando tu idea antes de invertir. Aprende métodos probados para entrevistar clientes y obtener insights valiosos que guiarán tu negocio.",
            topics: [
                "Validar antes de invertir, métodos eficaces",
                "Proceso de validación paso a paso",
                "Entrevistas con clientes potenciales",
                "Encuestas y testeos con clientes",
                "Google forms para encuestas"
            ]
        },
        {
            icon: ChartBar,
            title: "Módulo 3: Modelo de negocios",
            description: "Construye un negocio digital rentable y escalable desde el día uno. Aprende a crear un funnel de ventas efectivo y estrategias de captación que funcionan.",
            topics: [
                "Cómo estructurar un negocio rentable y escalable",
                "Funnel de ventas para emprendedores",
                "Simulador de campañas digitales",
                "Creación de una estrategia de captación",
                "Fiddelidapp - Estudio de caso sobre adquisición de clientes"
            ]
        },
        {
            icon: Settings,
            title: "Módulo 4: Operación del negocio",
            description: "Optimiza cada aspecto de tu negocio para maximizar resultados. Aprende a estructurar procesos eficientes que te permitan escalar sin complicaciones.",
            topics: [
                "Cómo definir una idea ganadora",
                "Canva de propuesta de valor",
                "Value Proposition Canva",
                "Redacción de una propuesta de valor",
                "Identificación de problemas reales"
            ]
        },
        {
            icon: LineChart,
            title: "Módulo 5: Optimización y escalabilidad",
            description: "Acelera el crecimiento de tu negocio con estrategias probadas. Aprende a medir, analizar y optimizar cada aspecto para alcanzar nuevos niveles de éxito.",
            topics: [
                "Cómo mejorar y hacer crecer tu negocio",
                "Indicadores clave de crecimiento",
                "Simulación y estrategia de expansión",
                "Plan de negocios",
                "Google sheets: plantilla para evaluar el impacto de las métricas de tu negocio"
            ]
        },
        {
            icon: PiggyBank,
            title: "Módulo 6: Finanzas y sustentabilidad",
            description: "Toma el control total de las finanzas de tu negocio. Aprende a gestionar presupuestos, calcular precios y crear planes financieros que garanticen la rentabilidad.",
            topics: [
                "Gestión financiera para emprendedores",
                "Plantilla de presupuesto y flujo de caja",
                "Calculadora de costos y precios",
                "Elaboración de un plan financiero",
                "Google sheets para gestión de presupuestos"
            ]
        },
        {
            icon: Calculator,
            title: "Módulo 7: Evaluación final",
            description: "Consolida todo lo aprendido y prepárate para el siguiente nivel. Recibe retroalimentación experta y un plan de acción personalizado para seguir creciendo.",
            topics: [
                "Evaluación final del curso",
                "Presentación de proyectos",
                "Retroalimentación y próximos pasos"
            ]
        }
    ];

    return (
        <section id="journey" className="py-16 bg-[#e6e6e6] text-[#2175a1]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-12">Estructura del Programa 🎓</h2>
                <p className="text-xl mb-12 opacity-90">7 módulos prácticos para lanzar tu negocio digital</p>

                {/* Módulos */}
                <div className="space-y-6">
                    {modules.map((module, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.02] p-6"
                        >
                            {/* Encabezado del módulo */}
                            <div className="flex items-center mb-4">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#3ca6dd] text-white rounded-full shadow-md mr-4">
                                    <module.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-left">{module.title}</h3>
                            </div>

                            {/* Descripción */}
                            <p className="text-lg opacity-90 mb-4 text-left">{module.description}</p>

                            {/* Temas del módulo */}
                            <div className="text-left">
                                <h4 className="font-bold mb-2">Temas del módulo:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    {module.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex} className="opacity-90">{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
