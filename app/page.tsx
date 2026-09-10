import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SymptomsGrid from "@/components/SymptomsGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import RootCauses from "@/components/RootCauses";
import TrustSignals from "@/components/TrustSignals";
import Testimonials from "@/components/Testimonials";
import WhatToExpect from "@/components/WhatToExpect";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#fbf9ec] font-poppins text-gray-900 overflow-x-hidden mt-[100px] ms:mt-[80px]">
        <Hero />
        <SymptomsGrid />
        <WhyChooseUs />
        <RootCauses />
        <TrustSignals />
        <Testimonials />
        <WhatToExpect />
        <FAQ />
      </main>
      <Newsletter />
      {/* <Footer /> */}
      <FloatingContact />
    </>
  );
}
