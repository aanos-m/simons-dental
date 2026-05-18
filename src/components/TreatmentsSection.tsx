
import TreatmentCard from "./TreatmentCard";

const treatments = [
  {
    title: "Preventive Dentistry",
    description:
      "Routine cleanings, exams, fluoride care, sealants, and digital X-rays to keep your smile healthy year-round.",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Professional whitening, bonding, veneers, and smile design options tailored to your goals.",
  },
  {
    title: "Restorative Care",
    description:
      "Tooth-colored fillings, crowns, bridges, and gentle treatment plans that restore comfort and function.",
  },
  {
    title: "Emergency Visits",
    description:
      "Fast support for toothaches, broken teeth, swelling, lost fillings, and urgent dental concerns.",
  },
  {
    title: "Clear Aligners",
    description:
      "Modern orthodontic consultations for patients interested in discreet teeth-straightening solutions.",
  },
  {
    title: "Family Dentistry",
    description:
      "Friendly dental care for children, teens, adults, and seniors in a calm, welcoming environment.",
  },
];

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Treatments</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Comprehensive dental services in one place.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you need a cleaning, a smile upgrade, or urgent support, our team will guide you through the right next step.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.title} title={treatment.title} description={treatment.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
