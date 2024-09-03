
import Image from "next/image";
import Navbar from "@/components/NavBarMenu";
import { SideBar } from "@/components/SideBar";
import { SpotlightPreview } from "@/components/Spotlight";
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="relative w-full flex flex-col items-center justify-center">
        <Navbar />
       
        <SpotlightPreview />
        <div className="mt-4"> 
          <CountdownTimer  />
        </div>
      </div>
    </main>
  );
}
