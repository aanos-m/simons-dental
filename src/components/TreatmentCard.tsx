
import { Smile } from "lucide-react";

type TreatmentCardProps = {
  title: string;
  description: string;
};

export default function TreatmentCard({ title, description }: TreatmentCardProps) {
  return (
    <article className="group rounded-[2rem] border border-slate-100 bg-[#f8fbfd] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-900 transition group-hover:bg-cyan-900 group-hover:text-white">
        <Smile className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}
