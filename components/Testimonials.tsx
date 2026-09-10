"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonialVideoIds } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="stories" className="scroll-mt-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brandBlue">Verified Recovery Journeys</h2>
          <p className="mt-2 text-base text-gray-600">
            Listen directly to patient records outlining their path to standard structural
            mobility.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {testimonialVideoIds.map((id) => (
            <VideoFacade key={id} id={id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoFacade({ id }: { id: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[9/16] shadow-md bg-gray-100 group border border-gray-200">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1&playsinline=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="relative w-full h-full cursor-pointer"
          aria-label="Play patient testimonial video"
        >
          <Image
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt="Patient testimonial video thumbnail"
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-brandBlue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
