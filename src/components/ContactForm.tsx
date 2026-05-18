

export default function ContactForm() {
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-sm lg:col-span-2">
      <h3 className="text-2xl font-semibold text-slate-950">Send us a message</h3>
      <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
        <input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-700" placeholder="First name" />
        <input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-700" placeholder="Last name" />
        <input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-700" placeholder="Email address" type="email" />
        <input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-700" placeholder="Phone number" />
        <textarea className="min-h-36 rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-700 sm:col-span-2" placeholder="How can we help?" />
        <button className="rounded-full bg-cyan-900 px-7 py-4 font-semibold text-white transition hover:bg-cyan-800 sm:col-span-2 sm:w-fit">
          Submit Message
        </button>
      </form>
    </div>
  );
}
