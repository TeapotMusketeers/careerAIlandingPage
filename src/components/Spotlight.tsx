import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "../components/ui/Spotlight";

export function SpotlightPreview() {
    const introText = `Unlock your potential with Career AI. From personalized insights to actionable advice, we empower you to navigate your professional journey with confidence and clarity.`;
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
         <br/>Introducing Career AI: 
        </h1>
        <br/>
       
        <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Your AI Companion for Career  Success
        </h2>
        <p className="mt-4 font-semibold text-base text-neutral-300 max-w-lg text-center mx-auto">
        Unlock your potential with Career AI. From personalized insights to actionable advice, we empower you to navigate your professional journey with confidence and clarity.
        </p>
      </div>
    </div>
  );
}
