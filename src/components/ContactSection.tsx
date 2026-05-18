
import { MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-cyan-900 p-8 text-white lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold">Visit Simon&apos;s Dental</h2>
          <p className="mt-5 leading-7 text-cyan-50">
            Have a question about treatment, insurance, or appointment availability? Reach out and our front desk team will help.
          </p>
          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 text-cyan-100" />
              <div>
                <p className="font-semibold">123 Smile Avenue</p>
                <p className="text-cyan-50">Suite 200, Your City, ST 12345</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 text-cyan-100" />
              <div>
                <p className="font-semibold">(555) 123-4567</p>
                <p className="text-cyan-50">Mon–Fri, 8:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
