import { contact } from "@/lib/data";

const quickLinks = [
  { label: "Prakriti Analysis", href: "https://yuktiherbs.com/pages/prakriti-analysis" },
  { label: "Panchakarma Treatments", href: "https://www.yuktiherbs.com/pages/panchakarma" },
  { label: "Ayurvedic Diet", href: "https://www.yuktiherbs.com/" },
  { label: "Ayurvedic Lifestyle", href: "https://www.yuktiherbs.com/" },
  { label: "Herbs A to Z", href: "https://www.yuktiherbs.com/" },
];

const whyLinks = [
  { label: "About Us", href: "https://www.yuktiherbs.com/pages/about-us" },
  { label: "Contact Us", href: "https://www.yuktiherbs.com/pages/contact-us" },
  { label: "Careers at Yukti Herbs", href: "https://www.yuktiherbs.com/pages/career-at-yukti-herbs" },
  { label: "Quality Certifications", href: "https://www.yuktiherbs.com/pages/our-certifications" },
  { label: "Hospital Services", href: "https://www.yuktiherbs.com/pages/ipd-stay-policy" },
];

const policyLinks = [
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Return & Refund Policy", href: "/refund-policy" },
  { label: "Cancellation Policy", href: "/refund-policy" },
  { label: "Shipping Policy", href: "/refund-policy" },
];

export default function Footer() {
  return (
    <footer className="relative bg-cream overflow-hidden">
      <span className="leaf-deco h-16 w-16 -left-4 bottom-40 rotate-12" />
      <span className="leaf-deco h-10 w-10 left-6 bottom-28 -rotate-6" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          <FooterCol title="Quick Links" links={quickLinks} />
          <FooterCol title="Why Yukti Herbs" links={whyLinks} />
          <FooterCol title="Policy" links={policyLinks} />

          <div>
            <p className="font-semibold text-navy mb-3">Contact Us</p>
            <p className="text-muted leading-relaxed">{contact.address}</p>
            <ul className="mt-3 space-y-1.5 text-muted">
              <li><a href={`tel:${contact.phoneHref}`} className="hover:text-navy">📞 {contact.phonePrimary}</a></li>
              <li><a href={`tel:${contact.phoneHref}`} className="hover:text-navy">📞 {contact.phoneSecondary}</a></li>
              <li><a href={`mailto:${contact.email}`} className="hover:text-navy">📧 {contact.email}</a></li>
              <li>🕒 {contact.hours}</li>
            </ul>
            <div className="mt-4 aspect-[4/3] overflow-hidden rounded-lg border border-line">
              <iframe
                title="Yukti Herbs location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.336618885704!2d76.7289877!3d30.6516415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe99d9387eb99%3A0xaa806599b6b71417!2sYukti%20Herbs%20-%20Ayurveda%20%26%20Panchakarma%20Hospital!5e0!3m2!1sen!2sin!4v1619876543210!5m2!1sen!2sin"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-line bg-white/60 px-6 py-5 text-center">
          <p className="italic text-[0.95rem] text-navy border-b border-goldDeep/40 inline-block pb-1">
            समदोषः समाग्निश्च समधातुमलक्रियः।
          </p>
          <p className="italic text-[0.95rem] text-navy mt-1">
            प्रसन्नात्मेन्द्रियमनाः स्वस्थ इत्यभिधीयते॥
          </p>
          <p className="mt-3 text-xs text-muted leading-relaxed max-w-xl mx-auto">
            &ldquo;A healthy person is one whose doshas, digestion, tissues and
            waste functions are balanced, and whose mind, senses and soul are
            content.&rdquo;
          </p>
        </div>

        <p className="mt-8 text-[0.72rem] text-muted leading-relaxed max-w-3xl">
          Disclaimers: These statements have not been evaluated by the Food
          and Drug Administration. Yukti Herbs products are not intended to
          diagnose, treat, cure, or prevent any disease. The information on
          this website is for educational purposes only and is not a
          substitute for medical advice, diagnosis, or treatment.
        </p>

        <p className="mt-5 text-center text-xs text-muted">
          © {new Date().getFullYear()}, Yukti Herbs (All Rights Reserved)
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-semibold text-navy mb-3">{title}</p>
      <ul className="space-y-1.5 text-muted">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="hover:text-navy">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
