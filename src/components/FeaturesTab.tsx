"use client";

import Image, { StaticImageData } from "next/image";
import { Tabs } from "../components/ui/tabs";
import pic1 from "../../public/assets/pic1.png";
import pic2 from "../../public/assets/pic2.png";
import pic3 from "../../public/assets/pic3.png";
import pic4 from "../../public/assets/pic4.png";
import pic5 from "../../public/assets/pic5.png";

export function FeaturesTab() {
  const tabs = [
    {
      title: "Dashboard",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-electric-cyan bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">Product Tab</p>
          <DummyContent image={pic1} />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-electric-cyan bg-gradient-to-br from-purple-700 to-violet-900 ">
          <p className="mb-6">Services Tab</p>
          <DummyContent image={pic2} />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-electric-cyan bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">Playground Tab</p>
          <DummyContent image={pic3} />
        </div>
      ),
    },
    {
      title: "Customize CV",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-electric-cyan bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">Content Tab</p>
          <DummyContent image={pic4} />
        </div>
      ),
    },
    {
      title: "Job Analysis",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-electric-cyan bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">Random Tab</p>
          <DummyContent image={pic5} />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
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


