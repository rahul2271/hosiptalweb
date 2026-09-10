"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brandBlue mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div
                key={f.q}
                className="border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-brandBlue text-base md:text-lg focus:outline-none cursor-pointer"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  <span>{f.q}</span>
                  <span
                    className={`text-sm transition-transform duration-200 text-amber-500 ${
                      open ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out px-5 text-sm md:text-base text-gray-600"
                  style={{ maxHeight: open ? "200px" : "0px", paddingBottom: open ? "1rem" : "0px" }}
                >
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
