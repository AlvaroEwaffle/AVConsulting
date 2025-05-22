import { motion } from "framer-motion";
import { useState } from "react";
import { Lightbulb, Search, ChartBar, Settings, LineChart, PiggyBank, Calculator } from "lucide-react";

const Journey = () => {
    const [activeStep, setActiveStep] = useState(0);

    const modules = [
        {
            icon: Lightbulb,
            title: "Módulo 1: Propuesta de valor",
            description: "Descubre cómo transformar tu idea en una propuesta de valor irresistible. Aprende a identificar problemas reales y crear soluciones que tus clientes no podrán resistir.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Search,
            title: "Módulo 2: Validación y testeo",
            description: "Evita costosos errores validando tu idea antes de invertir. Aprende métodos probados para entrevistar clientes y obtener insights valiosos que guiarán tu negocio.",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: ChartBar,
            title: "Módulo 3: Modelo de negocios",
            description: "Construye un negocio digital rentable y escalable desde el día uno. Aprende a crear un funnel de ventas efectivo y estrategias de captación que funcionan.",
            color: "from-green-500 to-green-600"
        },
        {
            icon: Settings,
            title: "Módulo 4: Operación del negocio",
            description: "Optimiza cada aspecto de tu negocio para maximizar resultados. Aprende a estructurar procesos eficientes que te permitan escalar sin complicaciones.",
            color: "from-yellow-500 to-yellow-600"
        },
        {
            icon: LineChart,
            title: "Módulo 5: Optimización y escalabilidad",
            description: "Acelera el crecimiento de tu negocio con estrategias probadas. Aprende a medir, analizar y optimizar cada aspecto para alcanzar nuevos niveles de éxito.",
            color: "from-orange-500 to-orange-600"
        },
        {
            icon: PiggyBank,
            title: "Módulo 6: Finanzas y sustentabilidad",
            description: "Toma el control total de las finanzas de tu negocio. Aprende a gestionar presupuestos, calcular precios y crear planes financieros que garanticen la rentabilidad.",
            color: "from-red-500 to-red-600"
        },
        {
            icon: Calculator,
            title: "Módulo 7: Evaluación final",
            description: "Consolida todo lo aprendido y prepárate para el siguiente nivel. Recibe retroalimentación experta y un plan de acción personalizado para seguir creciendo.",
            color: "from-indigo-500 to-indigo-600"
        }
    ];

    return (
        <section id="journey" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Estructura del Programa 🎓
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        7 módulos prácticos para lanzar tu negocio digital
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Línea de progreso */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full hidden md:block" />
                    
                    <div className="space-y-12 md:space-y-0">
                        {modules.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-center ${
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Contenido */}
                                <div className="w-full md:w-1/2 p-6">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className={`bg-gradient-to-br ${module.color} p-8 rounded-2xl shadow-xl text-white transform transition-all duration-300 cursor-pointer`}
                                        onClick={() => setActiveStep(index)}
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/20 rounded-full shadow-md mr-4">
                                                <module.icon size={24} className="text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold">{module.title}</h3>
                                        </div>
                                        <p className="text-white/90">{module.description}</p>
                                    </motion.div>
                                </div>

                                {/* Número de paso */}
                                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-gray-200 z-10 mx-4">
                                    <span className="text-xl font-bold text-gray-700">{index + 1}</span>
                                </div>

                                {/* Espacio vacío para alineación */}
                                <div className="w-full md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Indicador de progreso móvil */}
                <div className="md:hidden mt-8 flex justify-center space-x-2">
                    {modules.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeStep === index ? "bg-blue-600 scale-125" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
