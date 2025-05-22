import { Calendar, Users, ArrowRight } from 'lucide-react';

export default function NextCohort() {
    return (
        <section className="py-12 bg-gradient-to-r from-[#2175a1] to-[#3ca6dd]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 rounded-full mb-6">
                        <Calendar className="w-5 h-5 mr-2 text-white" />
                        <span className="font-medium text-white">Próxima Cohorte</span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <div className="flex items-center text-white/90">
                            <Users className="w-5 h-5 mr-2" />
                            <span>Quedan pocos cupos!</span>
                        </div>
                        <div className="h-4 w-px bg-white/20"></div>
                        <div className="text-white/90">
                            <span className="font-semibold">8 semanas</span> de duración
                        </div>
                    </div>
                    <a
                        href="https://pay.hotmart.com/L98924437P"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2175a1] rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        Reserva tu cupo
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
} 