

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row md:items-center lg:px-8">
        <p>© {new Date().getFullYear()} Simon&apos;s Dental. All rights reserved.</p>
        <p>Modern family dentistry built with care.</p>
      </div>
    </footer>
  );
}
