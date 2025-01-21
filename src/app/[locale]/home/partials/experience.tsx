import React from "react";
import Image from "next/image";

export interface DataType {
  image?: string;
  title?: string;
  url?: string;
}

export const data: DataType[] = [
  {
    image: "slider-image",
    title: "Handsome Guys",
  },
  {
    url: "https://picsum.photos/id/111/2879/1215",
    title: "Lost in Love",
  },
  {
    url: "https://picsum.photos/id/164/2879/1215",
    title: "My Love Mix-Up",
  },
  {
    url: "https://picsum.photos/id/454/2879/1215",
    title: "How to Spot a Red Flag",
  },
  {
    url: "https://picsum.photos/id/444/2879/1215",
    title: "Running Man",
  },
];

const ItemExp = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-between gap-6">
      <div className="flex flex-col items-center gap-6">
        <Image
          alt="BGV Website"
          src={`/images/${img}.jpg`}
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="max-[1279.98px]:!h-[300px] max-[639.98px]:!h-[200px]"
          style={{
            width: "100%",
            height: "400px",
            borderRadius: 24,
            objectFit: "cover",
          }}
        />
        <div className="flex flex-col gap-3 text-center">
          <h3 className="text-3xl text-[#00EEC6] font-bold">{title}</h3>
          <p className="text-white">{desc}</p>
        </div>
      </div>
      <div>
        <button className="bg-[#00EEC6] px-8 py-2 rounded-lg font-bold hover:bg-[#11806d] duration-300 ease-in-out">
          More Info
        </button>
      </div>
    </div>
  );
};

export default function SectionExperience() {
  return (
    <div className="relative z-[2]">
      <div className="container mx-auto py-20 max-[1027.98px]:py-10 max-[859.98px]:px-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center text-white">
            <h2 className="text-4xl font-bold">
              Pengalaman Terbaik dengan Infinitech+
            </h2>
            <p className="max-w-[48vw] mx-auto max-[859.98px]:max-w-full max-[859.98px]:px-4">
              Nikmati hari-harimu dengan pengalaman terbaik dalam streaming,
              bermain game dan browsing dengan koneksi internet cepat tanpa
              batas dan WiFi stabil dan kuat diaman kamu berada.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 max-w-[60vw] mx-auto max-[1027.98px]:max-w-full max-[859.98px]:gap-4">
            <ItemExp
              img="exp-stb"
              title="Smart Box 3 in 1"
              desc="Smart Box 3 in 1 STB + DVB - OTT + Internet Modem"
            />
            <ItemExp
              img="exp-ott"
              title="OTT Channels"
              desc="Over The Top (OTT) Channel Program Packages"
            />
            <ItemExp
              img="exp-internet"
              title="Internet Provider"
              desc="Internet Provider Packages"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
