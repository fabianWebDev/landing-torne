"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "¿Qué es el seminario de judo con David García Torné?",
    answer: "El seminario de judo con David García Torné es un evento de judo que se realiza en San José, Costa Rica. Está diseñado para todos los niveles y tiene como objetivo brindar una experiencia de aprendizaje única y enriquecedora para todos los participantes. David García Torné, uno de los mejores judokas de España, será el instructor principal del seminario.",
  },
  {
    question: "¿Qué nivel necesito?",
    answer: "El seminario está diseñado para todos los niveles. David García Torné es experto en enseñar a principiantes y a judokas de alto nivel.",
  },
  {
    question: "¿Cuales son los horarios del seminario?",
    answer: "El seminario dura 2 días. Los días 17 y 18 de octubre, de 4:00 pm a 6:30 pm.",
  },
  {
    question: "¿Necesito experiencia en judo?",
    answer: "No. El seminario está diseñado para todos los niveles. David García Torné es experto en enseñar a principiantes y a judokas de alto nivel.",
  },
  {
    question: "¿Qué debo llevar?",
    answer: "Judogi, cinturón y botella de agua.",
  },
  {
    question: "¿Puedo transferir mi entrada?",
    answer:
      "Sí, puedes transferirla avisando previamente a la organización.",
  },
  {
    question: "¿Habrá diferentes niveles entrenando juntos?",
    answer:
      "Sí, pero las actividades se adaptan para que todos aprovechen. David García Torné es experto en enseñar a principiantes y a judokas de alto nivel.",
  },
  {
    question: "¿Se puede grabar o tomar fotos?",
    answer: "Sí, siempre que no interrumpa el entrenamiento.",
  },
];

export default function FAQs() {
  const initialVisibleCount = 5;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleShowAll = () => {
    setShowAll((prev) => {
      const next = !prev;

      // Si volvemos a la vista corta y hay una pregunta abierta fuera del límite, la cerramos.
      if (!next && openIndex !== null && openIndex >= initialVisibleCount) {
        setOpenIndex(null);
      }

      return next;
    });
  };

  const visibleFaqItems = showAll ? faqItems : faqItems.slice(0, initialVisibleCount);

  return (
    <div className="bg-gray-100 w-full" id="preguntas-frecuentes">
      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="mb-8 text-center">
          <h2 className="text-6xl font-bold text-highlight font-bebas-neue tracking-widest after:content-[''] after:block after:h-2 after:w-60 after:bg-highlight after:mx-auto after:mt-3">Preguntas Frecuentes</h2>
        </div>

        <div className="space-y-3">
          {visibleFaqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden border border-gray-100 bg-white"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between px-4 py-4 text-left text-base font-medium"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-black">{item.question}</span>
                    <span className="ml-4 text-xl leading-none text-highlight-dark" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="border-t border-gray-100 px-4 py-4 text-sm text-black"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {faqItems.length > initialVisibleCount && (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={toggleShowAll}
              className="border-2 border-highlight px-4 py-2 text-lg font-semibold text-highlight transition hover:bg-highlight/80 hover:text-white font-bebas-neue tracking-widest"
            >
              {showAll ? "Ver menos" : "Ver más"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}