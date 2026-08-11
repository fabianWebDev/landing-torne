"use client";

import { useEffect, useState } from "react";

/** Fecha y hora del evento (Costa Rica, UTC−6). Ajusta si cambia el horario. */
const EVENT_AT = new Date("2026-10-16T18:00:00-06:00");

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export default function Timer() {
  const [parts, setParts] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, EVENT_AT.getTime() - Date.now());
      const d = Math.floor(diff / 86_400_000);
      const h = Math.floor((diff % 86_400_000) / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);
      setParts({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Cuenta regresiva hasta el evento"
      className="border-b-4 border-highlight py-4"
    >
      <div className="flex flex-col items-center justify-center px-6">
        <p className="mb-3 text-4xl font-bold text-highlight font-bebas-neue tracking-widest">
          Faltan solo:
        </p>
        <div
          className="grid max-w-md grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center justify-items-center gap-x-2 gap-y-2"
          role="timer"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="font-bebas-neue text-4xl tabular-nums tracking-tight text-highlight">
            {pad(parts.d)}
          </span>
          <span
            className="font-bebas-neue text-4xl text-highlight"
            aria-hidden
          >
            :
          </span>
          <span className="font-bebas-neue text-4xl tabular-nums tracking-tight text-highlight">
            {pad(parts.h)}
          </span>
          <span
            className="font-bebas-neue text-4xl text-highlight"
            aria-hidden
          >
            :
          </span>
          <span className="font-bebas-neue text-4xl tabular-nums tracking-tight text-highlight">
            {pad(parts.m)}
          </span>
          <span
            className="font-bebas-neue text-4xl text-highlight"
            aria-hidden
          >
            :
          </span>
          <span className="font-bebas-neue text-4xl tabular-nums tracking-tight text-highlight">
            {pad(parts.s)}
          </span>

          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-highlight dark:text-white">
            días
          </span>
          <span aria-hidden className="min-w-0" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-highlight dark:text-white">
            horas
          </span>
          <span aria-hidden className="min-w-0" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-highlight dark:text-white">
            minutos
          </span>
          <span aria-hidden className="min-w-0" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-highlight dark:text-white">
            segundos
          </span>
        </div>

        <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-200 text-center">
          *Precio de preventa hasta el 15 de Agosto o hasta agotar cupos*
        </p>
      </div>
    </section>
  );
}
