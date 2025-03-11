const BannerCTA = () => {
    return (
        <section className="w-full bg-[#2175a1] py-12 px-6 text-white flex flex-col items-center text-center">
            <a
                href="https://www.fidelidapp.cl/agendas/67abf2bbe7a1676842463da7"
                className="mt-6 bg-white text-[#2175a1] font-bold py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-[#3ca6dd] hover:text-white transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
            >
                📌 Agenda una sesión inicial
            </a>
        </section>
    );
};

export default BannerCTA;
