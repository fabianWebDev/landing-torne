import Image from "next/image";

export default function David() {
    return (
        <section className="overflow-hidden bg-highlight">
            <div className="grid grid-cols-1 md:grid-cols-3  min-h-[500px] px-6 md:px-12 mx-auto w-full max-w-6xl md:pt-10">

                {/* Texto */}
                <div className="col-span-2 p-4 flex flex-col justify-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-white font-bebas-neue tracking-widest text-center md:text-left">
                        David García Torné
                    </h2>

                    <div className="h-2 w-60 bg-white mt-3 mx-auto md:mx-0" />

                    <p className="text-2xl text-white mt-4 max-w-2xl text-center md:text-left text-justify">
                        Judoka olímpico en París 2024, David García Torné ha construido una carrera marcada por medallas europeas, podios en Grand Prix y Grand Slam, y la superación de múltiples lesiones.
                    </p>

                </div>

                {/* Imagen */}
                <div className="col-span-1 hidden md:block h-[400px] relative">
                    <Image
                        src="/david.webp"
                        alt="David García Torné"
                        fill
                        className="object-contain object-bottom scale-125 md:scale-150 translate-x-[-20%] translate-y-[10%]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="eager"
                    />
                </div>

            </div>
        </section>
    );
}