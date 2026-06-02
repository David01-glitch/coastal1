export default function SectionHeading({ eyebrow, title, intro, center = false, id }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="mt-2 text-3xl sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-ocean-800/85">{intro}</p>}
    </div>
  );
}
