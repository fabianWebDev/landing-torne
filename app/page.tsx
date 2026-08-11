import Image from "next/image";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import MapWidget from "@/components/MapWidget";
import Timer from "@/components/Timer";
import Footer from "@/components/Footer";
import PassesSection from "@/components/PassesSection";
import YouTubeIframe from "@/components/YouTubeIframe";
import David from "@/components/David";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Timer />
        <David />
        <PassesSection />
        <FAQs />
        <MapWidget />
        <Footer />
      </main>
    </div>
  );
}
