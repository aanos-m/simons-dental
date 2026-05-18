
export default function ConsultationForm() {
  return (
    <form className="rounded-[2rem] bg-white p-8 text-slate-950 shadow-2xl" onSubmit={(event) => event.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-700" placeholder="Full name" />
        <input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-700" placeholder="Date of birth" type="text" />
        <input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-700" placeholder="Email" type="email" />
        <input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-700" placeholder="Phone" />
        <select className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-700 sm:col-span-2" defaultValue="">
          <option value="" disabled>
            Reason for visit
          </option>
          <option>Routine cleaning</option>
          <option>Cosmetic consultation</option>
          <option>Tooth pain or emergency</option>
          <option>Clear aligners</option>
          <option>Second opinion</option>
        </select>
        <textarea className="min-h-32 rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-700 sm:col-span-2" placeholder="Tell us anything helpful before your visit" />
        <button className="rounded-full bg-cyan-900 px-7 py-4 font-semibold text-white transition hover:bg-cyan-800 sm:col-span-2">
          Request Consultation
        </button>
      </div>
    </form>
  );
}
