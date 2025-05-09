import React, { Fragment } from "react";
import Image from "next/image";
import { BgPurpleGradient, WrapperExperience } from "../style";
import Iconify from "@/components/Icon/iconify";

const FeatureItem = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <li className="flex flex-col items-center justify-center gap-3">
      <div className="inline-flex items-center gap-3">
        <Iconify name={icon} />
        <span className="font-semibold">Internet Package</span>
      </div>
      <div className="inline-flex items-start gap-2">
        <h3 className="text-7xl font-bold">{label}</h3>
        <span className="text-2xl font-bold">GB</span>
      </div>
    </li>
  );
};

const ItemExp = ({
  title,
  featureItems,
}: {
  title: string;
  featureItems: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center">
      <BgPurpleGradient className="flex flex-col gap-1 p-6 rounded-3xl rounded-es-none rounded-ee-none">
        <Image
          alt="BNEXT"
          src={`/images/logo-bnext-white.png`}
          width={0}
          height={0}
          sizes="100vw"
          priority
          style={{
            width: "70%",
            height: "auto",
          }}
        />
        <h3 className="text-white font-bold max-[767.98px]:text-2xl">
          {title}
        </h3>
      </BgPurpleGradient>
      <div className="w-full px-6 py-4 flex flex-col items-center justify-between gap-4 bg-white rounded-3xl rounded-ss-none rounded-se-none flex-grow-1 h-full">
        <ul className="flex flex-col gap-2">{featureItems}</ul>
        <button className="px-8 py-3 font-bold text-white duration-300 ease-in-out rounded-full bg-bnext-orange hover:bg-orange-700">
          Buy
        </button>
      </div>
    </div>
  );
};

export const CardItem = ({ image, url }: { image?: string; url?: string }) => {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        alt="BNext"
        src={url ? `${url}` : `/images/${image}.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          objectPosition: "center",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default function SectionPackage() {
  return (
    <BgPurpleGradient className="relative z-[2]">
      {/* <div className="bg-black/30 absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[1]" /> */}
      <Image
        alt="BNEXT"
        src={`/images/product-package-img.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] container mx-auto py-20 max-[1027.98px]:py-10 max-[859.98px]:px-4 z-[2]">
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-3 text-left text-white">
            <p className="text-lg max-w-[48vw] mx-auto max-[859.98px]:max-w-full max-[859.98px]:px-4 max-[767.98px]:text-sm">
              Warnai hari-harimu dengan layanan internet cepat tanpa batas!
              Sambungkan duniamu dengan kecepatan terbaik
            </p>
          </div>
          <WrapperExperience className="grid grid-cols-3 gap-10 max-w-[80vw] mx-auto max-[1027.98px]:max-w-full max-[1199.98px]:gap-10 max-[1027.98px]:gap-8 overflow-x-auto max-[767.98px]:grid-cols-[repeat(3,_minmax(300px,_1fr))]">
            <ItemExp
              title="Basic Package"
              featureItems={
                <Fragment>
                  <FeatureItem icon="mdi:web" label="30" />
                </Fragment>
              }
            />
            <ItemExp
              title="Standard Package"
              featureItems={
                <Fragment>
                  <FeatureItem icon="mdi:web" label="50" />
                </Fragment>
              }
            />
            <ItemExp
              title="Premium Package"
              featureItems={
                <Fragment>
                  <FeatureItem icon="mdi:web" label="100" />
                </Fragment>
              }
            />
          </WrapperExperience>
        </div>
      </div>
    </BgPurpleGradient>
  );
}
