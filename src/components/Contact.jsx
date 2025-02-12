import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const payload = {
            ...formData,
            accountId: "678e4df080622b7c255a9220", // ID fijo PROD
            //accountId: "673b62dab73ab3da95975794", // ID fijo DEV
        };

        try {
            const response = await fetch("https://api.fidelidapp.cl/api/landing/register", {
            //const response = await fetch("http://localhost:8080/api/landing/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                mode: 'cors'
            });

            if (response.ok) {
                setMessage("¡Mensaje enviado con éxito! 🎉");
                setFormData({ name: "", email: "", phone: "" });
            } else {
                setMessage("Hubo un error, intenta nuevamente.");
            }
        } catch (error) {
            setMessage("Error al enviar, revisa tu conexión.");
        }

        setLoading(false);
    };

    return (
        <section id="contacto" className="w-full bg-[#e6e6e6] py-20 px-8 md:px-16">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#2175a1] leading-tight">
                    Contáctame
                </h2>
                <p className="mt-4 text-lg md:text-xl text-[#2175a1] opacity-90">
                    ¿Tienes dudas o quieres trabajar conmigo? Déjame tu contacto.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <input
                    type="text"
                    name="name"
                    placeholder="Tu Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 mb-4 border rounded-lg text-[#2175a1]"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Tu Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 mb-4 border rounded-lg text-[#2175a1]"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Tu Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-4 mb-4 border rounded-lg text-[#2175a1]"
                />
                <button
                    type="submit"
                    className="w-full p-4 bg-[#2175a1] text-white font-bold rounded-lg hover:bg-[#3ca6dd] transition"
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Enviar Mensaje"}
                </button>
                {message && <p className="text-center mt-4 text-[green] font-bold">{message}</p>}
            </form>
        </section>
    );
};

export default Contact;
