import Image from "next/image";
export default function Footer() {
    return (
        <footer className="bg-highlight text-white text-center">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <h2 className="text-white text-4xl font-bold font-bebas-neue tracking-widest mb-4">Te invitan:</h2>
                <div className="flex flex-row items-center justify-center mb-8 gap-4">
                    <Image src="/logo.svg" alt="David García Torné" width={100} height={100} className="h-25 rounded-full" />
                    <Image src="/fecojudo.jpg" alt="Feco Judo" width={100} height={100} className="h-25 rounded-full" />
                </div>
                <hr className="h-px border-0 bg-gradient-to-r from-transparent via-white to-transparent mb-8" />
                <p className="text-white text-sm">Copyright © 2026 Seminario David García Torné. Todos los derechos reservados.</p>
                <p className="text-white text-sm">Desarrollado por <a href="https://www.wizardofcode.net/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 underline">WizOfCode</a></p>
            </div>
        </footer>
    );
}