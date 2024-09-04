"use client";

import Image, { StaticImageData } from "next/image";
import { Tabs } from "../components/ui/tabs";
import pic1 from "../../public/assets/pic1.png";
import pic2 from "../../public/assets/pic2.png";
import pic3 from "../../public/assets/pic3.png";
import pic4 from "../../public/assets/pic4.png";
import pic5 from "../../public/assets/pic5.png";
import { motion } from "framer-motion";
export function FeaturesTab() {
  const tabs = [
    {
      title: "Dashboard",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-electric-cyan bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">Home Screen</p>
          <DummyContent image={pic1} />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-electric-cyan bg-gradient-to-br from-purple-700 to-violet-900 ">
          <p className="mb-6">Services </p>
          <DummyContent image={pic2} />
        </div>
      ),
    },
    {
      title: "Cover Letter ",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-electric-cyan bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">Cover Letter Generation</p>
          <DummyContent image={pic3} />
        </div>
      ),
    },
    {
      title: "Customize CV",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-electric-cyan bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">Customize Your CV</p>
          <DummyContent image={pic4} />
        </div>
      ),
    },
    {
      title: "Job Analysis",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-electric-cyan bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">Job Analysis</p>
          <DummyContent image={pic5} />
        </div>
      ),
    },
  ];

  return (
    <div className="  relative flex flex-col max-w-5xl  w-full items-centre justify-start my-40">
     <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-soft-white mb-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       Discover What Sets Us Apart
      </motion.h2>
      <div className="w-full max-w-5xl h-[20rem] md:h-[40rem] [perspective:1000px]  mx-auto">
        <Tabs tabs={tabs} />
      </div>
     
    </div>
  );
}

const DummyContent = ({ image }: { image: StaticImageData }) => {
  return (
    <Image
      src={image}
      alt="dummy image"
      layout="responsive"
      width={1000}
      height={600}
      className="object-contain rounded-xl"
    />
  );
};

