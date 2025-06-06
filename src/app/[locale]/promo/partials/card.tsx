import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SectionCard() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

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
          <div className="grid grid-cols-3 gap-8 max-w-[80vw] mx-auto max-[1027.98px]:max-w-full max-[1199.98px]:gap-10 max-[1027.98px]:gap-8 overflow-y-auto max-[767.98px]:flex max-[767.98px]:gap-6 [&::-webkit-scrollbar]:[height:10px] [&::-webkit-scrollbar-thumb]:bg-gray-500/50">
            {[...new Array(6)].map((_, index) => (
              <Link href={`/${lang}/promo/detail`} key={index}>
                <div className="bg-white rounded-2xl flex flex-col max-[767.98px]:min-w-[70vw]">
                  <div className="relative after:content-[''] after:block after:pb-[100%]">
                    <Image
                      alt="bnext"
                      className="w-full h-full object-cover object-center rounded-2xl rounded-es-none rounded-ee-none absolute"
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
                  <div className="px-6 py-4 flex flex-col gap-2">
                    <span className="text-sm text-gray-500 font-semibold">
                      Program
                    </span>
                    <h3 className="line-clamp-2">
                      Promo Bulan Maret 2025, Paket Langganan Netflix hanya 30
                      Ribu Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Tempore aut labore error officia dolorem eveniet,
                      voluptatum deserunt eaque quia dolor, odit earum obcaecati
                      illo autem, necessitatibus ut consectetur sit beatae?
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
