import { useState } from "react";
import { Dialog } from "@headlessui/react";

const projects = [
    {
        title: "Fidelidapp: Founder en la primera plataforma de marketing de fidelización con herramientas avanzadas para negocios.",
        image: "/images/fidelidapp.png",
        description: "Fidelidapp.cl Marketing de Fidelización.",
    },
    {
        title: "Ewaffle: Co-fundador, empresa de prestación de servicios e-learning en el mundo educativo universitario.",
        image: "/images/ewaffle.png",
        description: "Ewaffle.cl: Servicios e-learning para universidades.",
    },
    {
        title: "Toptal: Freelance Agile Project Manager por los últimos 8 años, en la empresa de freelancing más grande del mundo.",
        image: "/images/agile-consulting.png",
        description: "Toptal: la red de freelancers más grande del mundo.",
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="py-16 bg-[#e6e6e6] text-[#2175a1] px-8 md:px-16">
            <h2 className="text-4xl font-extrabold text-center mb-8">
                Mis Proyectos Destacados 🚀
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform" onClick={() => setSelectedProject(project)}>
                        <img src={project.image} alt={project.description} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Popup */}
            {selectedProject && (
                <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
                        <button onClick={() => setSelectedProject(null)} className="absolute top-2 right-3 text-gray-500 text-2xl">&times;</button>
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                        <p className="text-gray-700">{selectedProject.description}</p>
                    </div>
                </Dialog>
            )}
        </section>
    );
};

export default Projects;
