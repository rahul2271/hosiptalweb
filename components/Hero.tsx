"use client";

import { useState } from "react";
import Script from "next/script";
import { heroImage, sheetdb, recaptchaSiteKey } from "@/lib/data";

const trustPoints = [
  "15,000+ Patients Treated",
  "MD Ayurveda Specialists",
  "10+ Years of Clinical Expertise",
  "Doctor-Supervised Panchakarma",
  "Online & Offline Consultations",
];

const timeSlots = [
  "10:00 AM - 12:00 PM",
  "12:00 PM - 02:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 07:00 PM",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Hero() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Same client-side reCAPTCHA check as the original Shopify section.
    const grecaptcha = (window as any).grecaptcha;
    const recaptchaResponse = grecaptcha ? grecaptcha.getResponse() : "";
    if (!recaptchaResponse) {
      setErrorMsg("Please check the 'I am not a robot' box before proceeding.");
      return;
    }
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const uniqueOrderId = "ORD-" + Date.now() + Math.floor(Math.random() * 1000);

    formData.append("Order_ID", uniqueOrderId);
    // Razorpay removed on this site — no payment is collected here, the
    // lead is still saved to the same SheetDB sheet used by the Shopify page.
    formData.append("Payment_Status", "Lead Only - No Payment (NextJS)");
    formData.append("Payment_ID", "N/A");
    // New parameter requested: identifies rows that came from this Next.js
    // site, inside the same SheetDB sheet the Shopify page also writes to.
    formData.append("Source", sheetdb.sourceTag);

    setStatus("submitting");

    try {
      const res = await fetch(sheetdb.endpoint, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("SheetDB request failed");
      if (grecaptcha) grecaptcha.reset();
      setStatus("success");
    } catch (err) {
      console.error("SheetDB submit error:", err);
      setStatus("error");
      setErrorMsg("Network error — please check your connection and try again.");
    }
  };

  return (
    <section
      id="top"
      className="relative w-full min-h-[90vh] lg:min-h-[85vh] flex bg-center bg-cover text-white items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 lg:bg-black/50" />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 py-6 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 px-3 py-1.5 rounded-full text-xs md:text-sm text-[#d0b35e] font-semibold tracking-wide w-fit backdrop-blur-sm">
              Consult a Doctor Sitting at Home Right Now!
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-md">
              Ayurvedic Consultation &amp; Personalized Care for <br />
              <span className="text-[#d0b35e] bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
                Pain Relief &amp; Wellness
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
              Receive a personalized Ayurvedic consultation with lifestyle, Panchakarma, diet and
              wellness recommendations based on your condition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm md:text-base text-gray-100 font-medium">
              {trustPoints.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs"
                >
                  <span className="text-amber-400 text-xl">✓</span> {t}
                </div>
              ))}
            </div>
          </div>

          <div id="booking" className="scroll-mt-28 lg:col-span-5 w-full max-w-[450px] mx-auto order-1 lg:order-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-2xl p-5 md:p-6 border border-gray-100 text-gray-800"
            >
              {status === "success" ? (
                <div className="py-8 text-center">
                  <p className="font-bold text-xl text-brandBlue">Request received ✅</p>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    Our care team will call you shortly to confirm your slot and collect the
                    consultation fee.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-4">
                    <span className="text-xs font-bold text-green-700 tracking-widest uppercase bg-green-100 px-2.5 py-0.5 rounded-md">
                      Online Consultation – ₹300
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-brandBlue mt-2">
                      Book Your Consultation ✅
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Consult an MD Ayurveda Specialist by Phone or Video
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    <Field label="Full Name *">
                      <input
                        type="text"
                        name="Name"
                        placeholder="e.g., Rajesh Kumar"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </Field>
                    <Field label="Phone Number (WhatsApp) *">
                      <input
                        type="tel"
                        name="Phone"
                        placeholder="10-Digit Mobile Number"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </Field>
                    <Field label="Primary Health Concern *">
                      <input
                        type="text"
                        name="Disease"
                        placeholder="e.g. Back Pain, Arthritis, Sciatica"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </Field>

                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Preferred Date *">
                        <input
                          type="date"
                          name="Appointment_Date"
                          required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                        />
                      </Field>
                      <Field label="Preferred Time *">
                        <select
                          name="Time_Slot"
                          required
                          defaultValue=""
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                        >
                          <option value="" disabled>Select Slot</option>
                          {timeSlots.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field label="Describe Your Health Concern (Optional)">
                      <textarea
                        name="Message"
                        rows={2}
                        placeholder="Describe your symptoms briefly..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500 resize-none"
                      />
                    </Field>

                    <div
                      className="g-recaptcha flex justify-center my-2 scale-[0.85] origin-top-left"
                      data-sitekey={recaptchaSiteKey}
                    />

                    <input type="hidden" name="Page" value="Pain Landing Page (Next.js)" />
                    <input type="hidden" name="Submission_Timestamp" value={new Date().toLocaleString("en-IN")} />

                    {errorMsg && (
                      <p className="text-xs text-red-600 font-medium">{errorMsg}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-4 w-full rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 py-3.5 font-bold text-base md:text-lg text-brandBlue hover:from-amber-600 hover:to-yellow-600 transition duration-300 transform active:scale-[0.99] shadow-lg shadow-amber-500/20 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === "submitting" ? "Securing Spot..." : "Book Consultation"}
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-3.5 text-[11px] text-gray-400 font-medium">
                    <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944a11.954 11.954 0 007.834 3.056A11.95 11.95 0 0120 12c0 5.308-3.442 9.809-8.24 11.391a1 1 0 01-.613 0C6.34 21.809 3 17.308 3 12c0-2.613.834-5.068 2.166-7.001zM10 7a1 1 0 011 1v3h3a1 1 0 110 2h-4a1 1 0 01-1-1V8a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Your details are saved securely
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">{label}</label>
      {children}
    </div>
  );
}
