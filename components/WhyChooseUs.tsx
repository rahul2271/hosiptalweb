"use client";

import { useState } from "react";
import Image from "next/image";
import { infrastructure } from "@/lib/data";

export default function WhyChooseUs() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="why-us" className="scroll-mt-24 bg-white py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brandBlue">Why Choose Yukti Herbs</h2>
          <p className="mt-2 text-base text-gray-600">
            India&rsquo;s Premier NABH-Accredited Ayurvedic Hospital for Spine &amp; Joint Care
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black border-4 border-white">
            {playing ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/2cTPAvZC1r8?rel=0&autoplay=1&playsinline=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="relative w-full h-full cursor-pointer"
                aria-label="Play: Yukti Herbs Pain Care video"
              >
                <Image
                  src="https://img.youtube.com/vi/2cTPAvZC1r8/hqdefault.jpg"
                  alt="Yukti Herbs Pain Care video thumbnail"
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-brandBlue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            )}
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold text-brandBlue">Our Specialized Infrastructure</h3>
            <ul className="space-y-3.5 text-gray-700 font-medium">
              {infrastructure.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-600 bg-green-50 p-1 rounded-full text-xs">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <a
                href="#booking"
                className="inline-flex w-full justify-center bg-brandBlue text-white hover:bg-brandBlue/90 py-3.5 px-6 rounded-xl font-semibold text-center transition duration-200 shadow-md"
              >
                Secure Consultation Time
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
