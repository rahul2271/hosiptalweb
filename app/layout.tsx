import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pain.yuktiherbs.com"),
  title: "Ayurvedic Pain Management Consultation | Yukti Herbs",
  description:
    "Book a personalised Ayurvedic consultation for back pain, joint pain, arthritis, cervical pain and sciatica with MD Ayurveda specialists at Yukti Herbs, Mohali.",
  keywords:
    "Ayurvedic Pain Treatment, Pain Management Ayurveda, Natural Pain Relief, Ayurvedic Treatment for Arthritis, Joint Pain Treatment, Back Pain Ayurveda, Knee Pain Treatment, Chronic Pain Management, Arthritis Pain Relief, Ayurvedic Treatment for Joint Pain, Herbal Pain Relief, Ayurvedic Pain Clinic, Chronic Pain Treatment, Sciatica Treatment Ayurveda, Cervical Pain Treatment, Knee Arthritis Treatment",
  authors: [{ name: "Yukti Herbs" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ayurvedic Pain Management Consultation | Yukti Herbs",
    description:
      "Personalised Ayurvedic consultation and care planning for chronic joint, back and nerve-related pain, from MD Ayurveda specialists.",
    url: "https://pain.yuktiherbs.com",
    siteName: "Yukti Herbs",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#152E50",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
