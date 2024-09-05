"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      title: "Free Version",
      price: "Free",
      features: [
        "Create and manage your own profile",
        "Generate customized CVs and cover letters",
        "Job post parsing with basic extraction",
        "Access to community support",
      ],
      comingSoon: true,
    },
    {
      title: "Pro Version",
      price: "$4.99/month",
      features: [
        "Create and manage your own profile",
        "Generate  unlimited  CVs and cover letters",
        "Advanced job post parsing with NLP",
        "Advanced customization options",
        "Priority customer support",
        "Access to premium templates",
        "Optimize LinkedIn profile",
        
      ],
    },
  ];

  return (
    <div className="relative h-full w-full bg-neutral-950 py-12 mt-10">
      <div className="relative z-10">
        <div className="text-center">
          <h1 className="mt-20 md:mt-0 text-5xl md:text-7xl font-bold text-neutral-50">
            Pricing
          </h1>
        </div>
      </div>

      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {plans.map((plan, index) => (
            <div key={index} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm relative">
                {/* {plan.comingSoon && (
                  <div className="absolute top-4 right-4 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded-full">
                    Coming Soon
                  </div>
                )} */}
                <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                  <h2 className="text-2xl font-bold text-black mb-4 dark:text-neutral-200">
                    {plan.title}
                  </h2>
                  <p className="text-3xl font-semibold text-black dark:text-neutral-200">
                    {plan.price}
                  </p>
                  <ul className="mt-4 mb-6 text-sm text-neutral-600 dark:text-neutral-400">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-2 flex items-center">
                        <FaCheckCircle className="mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
