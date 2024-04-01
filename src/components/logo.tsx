"use client";
import Link from "next/link";
import { FaLaptopHouse } from "react-icons/fa";

function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-row items-center justify-center w-[240px] p-2 border rounded-md cursor-pointer dark:bg-transparent bg-slate-100"
    >
      <div className="text-lg flex flex-row items-center gap-2">
        <FaLaptopHouse size={50} color="indigo" />
        <span
          className="flex flex-col items-start justify-start text-2xl font-bold"
          style={{ lineHeight: "1.5" }}
        >
          Ijan Housing{" "}
          <span className="text-[7px] italic font-normal p-0 m-0">
            Provide Hospitality and property For All Class
          </span>
        </span>
      </div>
    </Link>
  );
}

export default Logo;
