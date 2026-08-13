export default function MapWidget() {
  return (
    <div className="w-full">
      <section id="ubicacion" className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="mb-8 text-center">
          <h1 className="text-6xl font-bold text-highlight font-bebas-neue tracking-widest after:content-[''] after:block after:h-2 after:w-60 after:bg-highlight after:mx-auto after:mt-3">
            Ubicación
          </h1>
        </div>

        <div className="w-full aspect-[4/3] min-h-[167px] sm:min-h-[300px] md:min-h-[350px] md:aspect-video lg:h-[400px] lg:aspect-auto overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.010315304512!2d-84.10121662496971!3d9.933098390168954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3539d000001%3A0xac11cc4046a334c1!2sGimnasio%20Nacional%20Eddy%20Cort%C3%A9s!5e0!3m2!1ses!2scr!4v1786589830821!5m2!1ses!2scr"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Judo San Pedro"
          />

          
        </div>
      </section>
    </div>
  )
}