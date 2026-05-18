
import ConsultationForm from "./ConsultationForm";

export default function ConsultationSection() {
  return (
    <section id="consultation" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Consultation</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Ready to start your dental care plan?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Request a consultation and our team will follow up to confirm your appointment, answer questions, and help you prepare for your first visit.
          </p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold">What happens next?</p>
            <ol className="mt-4 space-y-3 text-slate-300">
              <li>1. Submit your preferred appointment details.</li>
              <li>2. Our team confirms availability.</li>
              <li>3. You receive visit instructions and next steps.</li>
            </ol>
          </div>
        </div>

        <ConsultationForm />
      </div>
    </section>
  );
}
