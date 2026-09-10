import Image from "next/image";
import { causes } from "@/lib/data";

export default function RootCauses() {
  return (
    <section id="causes" className="scroll-mt-24 py-16 bg-[#fbf7ea]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brandBlue">
            Why Long-Term Pain Management Requires a Personalized Approach?
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Chronic pain can have multiple contributing factors. A personalized Ayurvedic
            assessment may help identify lifestyle and wellness approaches suitable for your
            condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {causes.map((c) => (
            <div key={c.title} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-xs border border-gray-100">
              <div className="relative h-12 w-12 shrink-0">
                <Image src={c.img} alt={c.title} fill sizes="48px" className="object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-brandBlue text-base">{c.title}</h4>
                <p className="text-xs text-gray-500">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
