"use client";

import Logo from "./logo";

function FotterComponent() {
  return (
    <section className=" py-8 text-center bg-transparent dark:text-slate-100 text-slate-800 border-t-2 border-gray-400 gap-10">
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-3 items-center lg:justify-evenly justify-start ">
        <Logo />
        <div className="flex flex-col items-center justify-center gap-3">
          <h5 className="text-xl font-bold">Contact Us</h5>
          <ul>
            <li>Phone number</li>
            <li>Email Address</li>
            <li>FaceBook</li>
            <li>Twitter currectly X</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <h5 className="text-xl font-bold">Our Office</h5>
          <ul>
            <li>Ibiam street, Uyo, Akwa-ibon state</li>
            <li>10b Yaba , Lagos</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-[50px]">
        Copyright &copy; 2022. All Rights Reserved.
      </div>
    </section>
  );
}

export default FotterComponent;
