import { Sparkles, ShieldCheck, CheckCircle2, Clock, CalendarDays } from "lucide-react";

const stats = [
  { value: "20+", label: "Modern treatment options" },
  { value: "4.9★", label: "Patient satisfaction" },
  { value: "Same-day", label: "Emergency availability" },
];

function scrollToSection(id: string) {
  const element = document.getElementById(id.toLowerCase());
  element?.scrollIntoView({ behavior: "smooth" });
}

export default function HomeSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#d7f4fb,transparent_38%),radial-gradient(circle_at_bottom_left,#eaf7ef,transparent_34%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-medium text-cyan-900 shadow-sm">
            <Sparkles className="h-4 w-4" /> Gentle care. Modern dentistry. Confident smiles.
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 md:text-7xl">
            Personalized dental care for every smile.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Simon&apos;s Dental is a welcoming clinic focused on preventive care, restorative dentistry, cosmetic treatments, and comfortable patient experiences from the first visit onward.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("consultation")}
              className="rounded-full bg-cyan-900 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-900/20 transition hover:-translate-y-0.5 hover:bg-cyan-800"
            >
              Schedule a Consultation
            </button>
            <button
              onClick={() => scrollToSection("treatments")}
              className="rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-900 hover:text-cyan-900"
            >
              Explore Treatments
            </button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white bg-white/75 p-5 shadow-sm backdrop-blur">
                <p className="text-2xl font-semibold text-cyan-900">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] bg-white p-4 shadow-2xl shadow-cyan-950/10">
            <div className="min-h-[520px] rounded-[1.5rem] bg-gradient-to-br from-cyan-900 via-cyan-800 to-slate-900 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">New Patients</p>
                  <h2 className="mt-3 text-3xl font-semibold">Comfort-first visits</h2>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15">
                  <ShieldCheck className="h-8 w-8" />
                </div>
              </div>

              <div className="mt-20 rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                <p className="text-lg font-medium">Your first visit includes:</p>
                <div className="mt-5 space-y-4">
                  {["Comprehensive oral health review", "Digital imaging when needed", "Personalized treatment plan", "Transparent cost discussion"].map((text) => (
                    <div key={text} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-100" />
                      <span className="text-cyan-50">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 text-slate-900">
                  <Clock className="h-6 w-6 text-cyan-800" />
                  <p className="mt-4 font-semibold">Flexible Hours</p>
                  <p className="mt-1 text-sm text-slate-600">Early morning and afternoon appointments available.</p>
                </div>
                <div className="rounded-3xl bg-cyan-50 p-5 text-slate-900">
                  <CalendarDays className="h-6 w-6 text-cyan-800" />
                  <p className="mt-4 font-semibold">Easy Booking</p>
                  <p className="mt-1 text-sm text-slate-600">Request your preferred time online.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
