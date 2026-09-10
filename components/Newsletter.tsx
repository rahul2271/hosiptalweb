"use client";

export default function Newsletter() {
  return (
    <section className="bg-navy py-8">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <h2 className="text-sm sm:text-base tracking-wide text-white uppercase">
          Ayurvedic Wisdom, Straight to Your Inbox
        </h2>
        <p className="mt-1.5 text-[0.82rem] text-mutedLight">
          Sign up to be the first to know about upcoming sales, new products,
          wellness tips, and all things Ayurveda.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-4 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Email address"
            className="flex-1 rounded-md border border-navyLight bg-navyLight/60 px-4 py-2.5 text-sm text-white placeholder:text-mutedLight focus:outline-none focus:border-gold"
          />
          <button
            type="submit"
            className="rounded-md bg-gold px-6 py-2.5 text-sm font-semibold text-navy hover:bg-goldDeep hover:text-white transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
