export default function Hero() {
    return (
        <section
            className="relative flex h-[60vh] items-center justify-center bg-cover bg-center bg-no-repeat md:h-[80vh]"
            style={{ backgroundImage: "url('/hero.webp')" }}
        >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 px-6 text-white">
                <h1 className="text-left text-5xl mb-2 font-bold lg:text-5xl xl:text-6xl 2xl:text-8xl font-bebas-neue">Seminario <span className="">DAVID GARCÍA TORNÉ</span></h1>
                <p className="text-left text-md font-bold sm:text-lg md:text-2xl lg:text-4xl">Entrená judo de alto nivel con David García Torné</p>
                <p className="text-left text-md font-bold sm:text-lg md:text-2xl lg:text-4xl">Seminario intensivo — todos los niveles</p>
                <hr className="mb-2 mt-2 w-40 md:w-80 md:mb-4 md:mt-4 border-t-2 border-current" />
                <h2 className="text-left text-sm sm:text-xl md:text-xl lg:text-3xl">Gimnasio Nacional, San José, Costa Rica</h2>
                <h2 className="text-left text-sm sm:text-xl md:text-xl lg:text-3xl">El 17 y 18 de octubre de 2026</h2>
                <p className="text-left text-sm sm:text-xl md:text-xl lg:text-3xl">*Cupo limitado*</p>
                <a
                  className="mt-2 inline-block bg-highlight px-4 py-2 text-3xl font-bold text-white md:mt-4 font-bebas-neue tracking-widest md:text-4xl"
                  href="https://forms.gle/UVWLyNX4j93EXNDA6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reservar mi cupo
                </a>
            </div>
        </section>
    );
}