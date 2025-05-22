import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        content: "Digital Founders me ayudó a estructurar mi idea y convertirla en un negocio real. La metodología práctica y el acompañamiento personalizado fueron clave para mi éxito.",
        rating: 5
    },
    {
        content: "El programa superó mis expectativas. No solo aprendí teoría, sino que pude aplicar todo en tiempo real. Ahora tengo un negocio digital funcionando.",
        rating: 5
    },
    {
        content: "La estructura del programa es excelente. Cada módulo está diseñado para llevarte paso a paso en el proceso de crear tu negocio digital.",
        rating: 5
    },
    {
        content: "Las herramientas y frameworks proporcionados son increíblemente útiles. Me ayudaron a tomar decisiones informadas en cada paso del proceso.",
        rating: 5
    },
    {
        content: "El enfoque práctico del programa es lo que más valoro. No es solo teoría, es acción real y resultados medibles.",
        rating: 5
    },
    {
        content: "El programa es muy completo y tiene todo lo que necesitas para lanzar tu negocio digital. Recomendado 100%",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#2175a1] mb-4">
                        Lo que dicen nuestros estudiantes
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Descubre cómo Digital Founders ha ayudado a otros emprendedores a lanzar sus negocios digitales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                            style={{
                                animationDelay: `${index * 200}ms`,
                                animation: 'fadeInUp 0.5s ease-out forwards',
                                opacity: 0
                            }}
                        >
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <div className="relative">
                                <Quote className="w-6 h-6 text-gray-300 absolute -top-2 -left-2" />
                                <p className="text-gray-600 italic">
                                    "{testimonial.content}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://pay.hotmart.com/L98924437P"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#2175a1] text-white rounded-full font-semibold hover:bg-[#3ca6dd] transition-colors duration-300"
                    >
                        Únete a nuestra próxima cohorte
                    </a>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
} 