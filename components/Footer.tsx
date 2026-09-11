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
   

        <p className="mt-8 text-[0.72rem] text-muted leading-relaxed max-w-3xl text-center mx-auto px-5 sm:px-8">
          Disclaimer: The content on this website is for educational purposes under AYUSH guidelines and does not replace professional medical advice. Consultations and treatments provided at our facility are tailored to individual patient needs by registered practitioners, and results may vary. For any medical concerns, always consult a qualified healthcare provider directly. This is not for emergency medical care.
        </p>

        <p className="mt-5 text-center text-xs text-muted">
          © {new Date().getFullYear()}, Yukti Herbs (All Rights Reserved)
        </p>
      
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
