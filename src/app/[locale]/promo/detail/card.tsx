import React from "react";
import Image from "next/image";

export default function SectionCard() {
  return (
    <div className="relative z-[2]">
      <div className="container mx-auto py-20 max-[1027.98px]:py-10 max-[859.98px]:px-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-semibold">Promo BNext</h1>
            <p className="text-xl text-white">
              Nikmati berbagai program promo menarik dari BNEXT dan Official
              Partnership
            </p>
          </div>
          <div className="flex flex-col gap-8 max-w-[50%] mx-auto">
            <div className="relative after:content-[''] after:block after:pb-[100%]">
              <Image
                alt="bnext"
                className="w-full h-full object-cover object-center rounded-2xl absolute"
                src={`/images/banner-about.jpg`}
                width={0}
                height={0}
                sizes="100vw"
                priority
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="bg-white rounded-2xl flex flex-col gap-4 px-8 py-6 ">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-500 font-semibold">
                  Program
                </span>
                <h3 className="text-xl font-semibold">
                  Promo Bulan Maret 2025, Paket Langganan Netflix hanya 30 Ribu
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <button className="px-8 py-3 font-bold text-white duration-300 ease-in-out rounded-full bg-bnext-orange hover:bg-orange-700">
                  Redeem On
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
