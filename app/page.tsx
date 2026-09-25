import { Section } from "@/components/ui/Section";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div className="desquite-grain relative flex min-h-dvh overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        }}
      />

      <main className="relative z-10 flex flex-1 flex-col">
        <Section
          container="smosh"
          className="flex min-h-dvh items-center !py-3"
          subClassName="w-full"
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-2">
            <h1 className="desquite-fade-up font-display h1 max-w-[12ch] text-balance text-gray-12">
              El Desquite
            </h1>

            <div
              aria-hidden
              className="desquite-rule h-[2px] w-12 bg-accent-9"
            />

            <p className="desquite-fade-up-delay p max-w-xl text-pretty text-gray-11">
              Textos que vuelven por lo que se les debe. Un proyecto literario
              de Garitma, listo para publicar capítulos, fragmentos y
              desquites.
            </p>

            <div className="mt-1">
              <WaitlistForm />
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
