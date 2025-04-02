import { ArrowRight } from 'lucide-react';

export default function BannerCTA() {
    return (
        <section className="py-16 bg-gradient-to-r from-[#2175a1] to-[#3ca6dd]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        ¿No sabes si este programa es ideal para ti? Conversemos
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Agenda una entrevista inicial gratuita de 30 minutos para evaluar si Digital Founders es el programa que necesitas para lanzar tu negocio digital.
                    </p>
                    <a
                        href="https://www.fidelidapp.cl/agendas/67abf2bbe7a1676842463da7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2175a1] rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        Agendar llamada gratuita
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
