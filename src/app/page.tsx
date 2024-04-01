"use client";
import AgentBanner from "@/components/agent_banner";
import BannerComponent from "@/components/Banner";
import Properties from "@/components/house";
import { useEffect, useState } from "react";
import Loader from "./loading";
import TipContentComponent from "@/components/tip_content";

export default function Home() {
  const [isMounted, setisMounted] = useState<boolean>(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  return (
    <>
      {!isMounted && <Loader />}
      {isMounted && (
        <div className="flex flex-col gap-1">
          <BannerComponent />
          <Properties />
          <AgentBanner />
          {/* ASSURANCE TEXT */}
          <TipContentComponent />
          {/* WHO ARE WE ? */}
        </div>
      )}
    </>
  );
}
