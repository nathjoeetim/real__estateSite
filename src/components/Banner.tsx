"use client";
import houseBanner from "@/assets/img/house-banner.png";
import Image from "next/image";
import SearchPropertyComponent from "./search";
import { PropertyData } from "./data";

function BannerComponent() {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 mt-3">
      <div className="flex flex-col lg:flex-row">
        <div className=" flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-10">
          <h1 className="text-4xl lg:text-[55px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Get </span>Your Dream Property
            With Us!!
          </h1>
          <p className="max-w-[530px] mb-8 items-center ">
            We serve as a land and property agent linking sellers with buyers in
            order to help aquire properties witin a shortest time and at a
            friendly price.{" "}
            <span className="text-violet-700">
              When you think of real-estate think us !!{" "}
            </span>
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <Image
            src={houseBanner}
            height={90}
            width={250}
            alt="house banner"
            className="w-full  rounded-tl-[90px]"
          />
        </div>
      </div>
      <SearchPropertyComponent />
    </section>
  );
}

export default BannerComponent;
