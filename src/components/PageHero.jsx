export default function PageHero({ eyebrow, title, intro, image, imageAlt }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/80 via-ocean-800/55 to-ocean-700/25" />
      </div>
      <div className="container-page py-24 sm:py-28">
        <div className="max-w-2xl text-coastalwhite">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-seafoam-200">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">{title}</h1>
          {intro && <p className="mt-5 text-lg text-coastalwhite/90">{intro}</p>}
        </div>
      </div>
    </section>
  );
}
