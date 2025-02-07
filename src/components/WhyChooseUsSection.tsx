"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
    {
      title: "Collaborative Jam Sessions",
      description:
        "Collaborate with fellow musicians in real time, no matter where they are. Jam, experiment with new ideas, and compose together. With our platform, you can instantly share musical ideas and evolve your compositions seamlessly.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Jam Sessions
        </div>
      ),
    },
    {
      title: "Track Version Control",
      description:
        "Track the evolution of your compositions effortlessly. With real-time version control, you can always work on the latest iteration of your track, making sure everyone is on the same page without worrying about old versions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Track Version Control
        </div>
      ),
    },
    {
      title: "Running Out of Inspiration?",
      description:
        "Need a boost in creativity? Explore new ideas and break free from creative blocks. Our platform offers collaboration with musicians worldwide, ensuring fresh inspiration and a constant flow of creative energy.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running Out of Inspiration?
        </div>
      ),
    },
  ];
  
function WhyChooseUsSection() {
  return (
    <div>
        <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUsSection