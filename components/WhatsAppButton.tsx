export default function WhatsAppButton() {
  const message =
    "Hola! Estoy interesado en el Seminario de Judo. ¿Me puedes compartir información de horarios, ubicación y costos? Gracias!";

    return (
      <a
        aria-label="WhatsApp"
        className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-highlight text-white shadow-lg hover:scale-105 transition"
        href={`https://wa.me/50672092139?text=${encodeURIComponent(message)}`}
        rel="noreferrer"
        target="_blank"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7"
          fill="currentColor"
        >
          <path d="M16 .4C7.6.4.8 7.2.8 15.6c0 2.7.7 5.3 2.1 7.6L.4 31.6l8.7-2.3c2.2 1.2 4.6 1.8 7.1 1.8 8.4 0 15.2-6.8 15.2-15.2S24.4.4 16 .4zm0 27.6c-2.2 0-4.3-.6-6.2-1.6l-.4-.2-5.2 1.4 1.4-5.1-.3-.5c-1.2-2-1.8-4.2-1.8-6.5 0-7 5.7-12.7 12.7-12.7S28.9 8.5 28.9 15.6 23.2 28 16 28zm7-9.5c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.2.4-1 1.3-1.2 1.5-.2.2-.5.3-.9.1-2.4-1.2-4-2.1-5.6-4.7-.4-.6.4-.6 1.2-2.1.1-.2 0-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.2 6.8 5.9.9.4 1.6.6 2.2.8.9.3 1.7.2 2.3.1.7-.1 2.4-1 2.7-2 .3-1 .3-1.8.2-2-.1-.2-.3-.3-.7-.5z" />
        </svg>
      </a>
    );
  }