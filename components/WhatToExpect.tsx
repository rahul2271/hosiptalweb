import Image from "next/image";
import { expectations } from "@/lib/data";

export default function WhatToExpect() {
  return (
    <section id="expect" className="scroll-mt-24 bg-[#fbf7ea] py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-brandBlue">
              What to Expect During Your Consultation
            </h2>
            <ul className="space-y-3.5 text-gray-700 font-medium">
              {expectations.map((item) => (
                <li key={item.title} className="flex items-start gap-2">
                  ✔ <span><strong>{item.title}:</strong> {item.detail}</span>
                </li>
              ))}
              <li className="text-amber-700 flex items-start gap-2 font-semibold">
                🎁{" "}
                <span className="bg-amber-100/70 px-1.5 py-0.5 rounded text-xs md:text-sm">
                  Bonus included:
                </span>{" "}
                Free Initial Mobility Assessment (valued at ₹799)
              </li>
            </ul>
            <div className="pt-2">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-4 font-bold text-brandBlue hover:from-amber-600 hover:to-yellow-600 transition duration-200 shadow-md transform hover:-translate-y-0.5"
              >
                Book Your Ayurvedic Consultation
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-200 aspect-square relative">
              <Image
                src="https://www.yuktiherbs.com/cdn/shop/t/13/assets/WhatYouetintheFirstConsultationImage.jpg.jpeg"
                alt="Physician Consultation Session"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
