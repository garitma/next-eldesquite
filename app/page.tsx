import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <div className="desquite-grain relative min-h-dvh overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        }}
      />

      <header className="relative z-10 flex items-center justify-between px-2 py-1.5 md:px-4">
        <p className="text-sm tracking-[0.18em] uppercase text-gray-11">
          Garitma
        </p>
        <Link
          href="https://garitma.com"
          className="text-sm text-accent-11 underline decoration-accent-a6 underline-offset-4 transition-colors hover:text-accent-9"
        >
          garitma.com
        </Link>
      </header>

      <main className="relative z-10 flex flex-1 flex-col">
        <Section
          container="smosh"
          className="flex min-h-[calc(100dvh-4.5rem)] items-center !py-3"
          subClassName="w-full"
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-2">
            <p className="desquite-fade-up text-sm uppercase tracking-[0.22em] text-accent-11">
              Escritura
            </p>

            <h1 className="desquite-fade-up-delay font-display h1 max-w-[12ch] text-balance text-gray-12">
              El Desquite
            </h1>

            <div
              aria-hidden
              className="desquite-rule h-[2px] w-12 bg-accent-9"
            />

            <p className="desquite-fade-up-delay-2 p max-w-xl text-pretty text-gray-11">
              Textos que vuelven por lo que se les debe. Un proyecto literario
              de Garitma, listo para publicar capítulos, fragmentos y
              desquites.
            </p>

            <div className="desquite-fade-up-delay-2 mt-1 flex flex-wrap items-center gap-1">
              <Button asChild size="lg">
                <Link href="#obra">Leer la obra</Link>
              </Button>
              <Button asChild variant="pill" size="lg">
                <Link href="https://garitma.com">Ver poemas en Garitma</Link>
              </Button>
            </div>
          </div>
        </Section>

        <Section
          id="obra"
          container="smosh"
          className="border-t border-gray-6 bg-gray-2/70"
          subClassName="w-full max-w-3xl"
        >
          <div className="flex flex-col gap-1.5 py-2 md:py-4">
            <h2 className="font-display h2 text-gray-12">La obra</h2>
            <p className="p max-w-2xl text-pretty text-gray-11">
              Aquí vivirán los textos de <em>El Desquite</em>. El repositorio ya
              está bootstrapeado con Aura; el siguiente paso es volcar el
              manuscrito (incluido el PDF histórico) a capítulos navegables.
            </p>
            <ul className="mt-1 space-y-0.5 text-gray-12">
              <li className="border-b border-gray-6 py-1">
                <span className="font-display h5">Capítulo I</span>
                <span className="ml-1 text-sm text-gray-11">— próximamente</span>
              </li>
              <li className="border-b border-gray-6 py-1">
                <span className="font-display h5">Capítulo II</span>
                <span className="ml-1 text-sm text-gray-11">— próximamente</span>
              </li>
              <li className="border-b border-gray-6 py-1">
                <span className="font-display h5">Capítulo III</span>
                <span className="ml-1 text-sm text-gray-11">— próximamente</span>
              </li>
            </ul>
          </div>
        </Section>
      </main>

      <footer className="relative z-10 border-t border-gray-6 px-2 py-1.5 text-sm text-gray-11 md:px-4">
        <p>
          El Desquite ·{" "}
          <Link
            href="https://garitma.com"
            className="text-accent-11 underline decoration-accent-a6 underline-offset-4 hover:text-accent-9"
          >
            Garitma
          </Link>
        </p>
      </footer>
    </div>
  );
}
