import AsymmetricalGallery from "./_componnents/AsymmetricalGallery";
import Contact from "./_componnents/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-3 pb-16 sm:px-6 lg:px-8">
      <section
        id="home"
        className="grid gap-8 py-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16"
      >
        <div className="space-y-5">
          <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)] shadow-sm">
            Portfolio multimédia
          </span>

          <div className="space-y-3 sm:space-y-4">
            <h1 className="max-w-2xl text-[2.25rem] font-black leading-[0.95] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Des projets visuels simples, utiles et bien présentés.
            </h1>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-lg">
              Je crée des expériences multimédia, de l&apos;identité visuelle au jeu, avec une approche claire, lisible et orientée résultat.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#work"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-black sm:w-auto"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-50 sm:w-auto"
            >
              Me contacter
            </a>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-[var(--muted)] sm:text-sm">
            <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1">UI simple</span>
            <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1">Animation</span>
            <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1">Jeu vidéo</span>
            <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1">3D / VFX</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_65%)]" />
          <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
            <Image
              src="/Header.png"
              alt="Aperçu du portfolio"
              width={1200}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <AsymmetricalGallery />

      <Contact />
    </main>
  );
}
