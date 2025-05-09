import React from "react";
import Image from "next/image";
import Form from "./form";

export default function SectionBanner() {
  return (
    <div className="relative">
      <div className="container mx-auto py-20 max-[1027.98px]:py-10 max-[859.98px]:px-4 flex flex-col justify-between">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Image
              alt="bnext"
              src={`/images/logo-bnext-full-white.png`}
              width={0}
              height={0}
              sizes="100vw"
              priority
              style={{
                width: "200px",
                height: "auto",
              }}
            />
            <h2 className="text-2xl font-semibold text-white">
              Kemitraan Resmi, Peluang Tak Terbatas!
            </h2>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
