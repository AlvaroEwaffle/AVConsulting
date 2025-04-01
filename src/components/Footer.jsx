import { Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#2175a1] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Program Info & Social */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Digital Founders</h3>
                        <p className="mb-6">
                            Programa de acompañamiento para lanzar tu negocio digital desde cero.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://linkedin.com/in/alvarovillena" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com/alvarovillena" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
                            </li>
                            <li>
                                <a href="#sobremi" className="hover:text-white transition-colors">Programa</a>
                            </li>
                            <li>
                                <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
                            </li>
                            <li>
                                <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center ">
                                <Mail className="w-5 h-5 mr-3" />
                                <a href="mailto:alvaro.villena@gmail.com" className="hover:text-white transition-colors">
                                    alvaro.villena@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center ">
                                <Phone className="w-5 h-5 mr-3" />
                                <a href="tel:+56912345678" className="hover:text-white transition-colors">
                                    +56 9 1234 5678
                                </a>
                            </li>
                            <li className="flex items-center ">
                                <MapPin className="w-5 h-5 mr-3" />
                                <span>Santiago, Chile</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center ">
                    <p>© {new Date().getFullYear()} Digital Founders. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
} 