import Image from "next/image";
import Navbar from "@/components/NavBarMenu";
import { SpotlightPreview } from "@/components/Spotlight";
import CountdownTimer from '../components/CountdownTimer';
import { Cta } from "@/components/Cta";
import { FeaturesTab } from "@/components/FeaturesTab";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className=" bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <div className="relative w-full flex flex-col items-center justify-center">
      <Navbar/>
      <SpotlightPreview/>
      <Cta />
      
      <div className="mt-5 flex flex-col items-center">
          <CountdownTimer />
        </div>
        <div className="w-full flex justify-center ">
          <FeaturesTab />
        </div>

        <Pricing/>
      
     
       
        
       
      </div>
    </main>
  );
}
