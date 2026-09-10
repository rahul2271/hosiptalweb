import Image from "next/image";
import { symptoms } from "@/lib/data";

export default function SymptomsGrid() {
  return (
    <section id="symptoms" className="scroll-mt-24 max-w-7xl mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brandBlue">
          Our specialists assess the possible causes of your symptoms and recommend an
          individualized Ayurvedic care plan.
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-600">
          Masking symptoms offers temporary relief. If you struggle with any of these
          conditions, the structural imbalance needs immediate root-cause correction.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {symptoms.map((s) => (
          <div
            key={s.title}
            className="flex flex-col items-center text-center p-5 bg-white border border-gray-100 rounded-2xl shadow-xs hover:shadow-md transition group hover:border-amber-200"
          >
            <div className="relative h-14 w-14 mb-3">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="56px"
                className="object-contain group-hover:scale-105 transition duration-300"
              />
            </div>
            <p className="font-semibold text-sm md:text-base text-brandBlue">{s.title}</p>
          </div>
        ))}

        <div className="col-span-2 md:col-span-1 lg:col-span-2 flex items-center justify-center bg-gradient-to-br from-brandBlue to-[#234375] rounded-2xl p-5 text-white shadow-xs">
          <p className="text-sm md:text-base font-medium text-center text-amber-100">
            Ayurvedic care focuses on supporting mobility, flexibility and long-term joint
            wellness through personalized treatment plans.
          </p>
        </div>
      </div>
    </section>
  );
}
