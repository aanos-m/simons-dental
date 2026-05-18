
export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">About Us</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            A calm, modern clinic built around patient trust.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            We believe great dentistry should feel clear, comfortable, and personal. Our team takes time to understand your goals, explain every option, and provide care that fits your needs and schedule.
          </p>
          <p>
            From routine checkups to cosmetic and restorative treatment, Simon&apos;s Dental combines modern technology with a warm, family-friendly approach.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Transparent pricing", "Gentle techniques", "Digital-first care"].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-5 text-base font-semibold text-slate-800 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
