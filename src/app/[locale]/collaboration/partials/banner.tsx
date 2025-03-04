import React from "react";
import Image from "next/image";

export default function SectionBanner() {
  return (
    <div className="relative">
      <Image
        alt="bnext"
        src={`/images/banner-collaboration.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center w-full h-full justify-normal">
        <div className="container mx-auto py-20 max-[1027.98px]:py-10 max-[859.98px]:px-4 text-white h-[70vh] flex flex-col justify-between">
          <h2 className="text-6xl font-semibold">
            Gabung Sekarang, jadilah Mitra Resmi dan Raih Keuntungan Tanpa
            Batas!
          </h2>
        </div>
      </div>
    </div>
  );
}
