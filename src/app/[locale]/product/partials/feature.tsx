import React, { Fragment } from "react";
import Image from "next/image";
import { BgPurpleGradient, WrapperExperience } from "../style";
import Iconify from "@/components/Icon/iconify";

const FeatureItem = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <li className="inline-flex items-start gap-3">
      <div className="w-[20px] relative top-[2px]">
        <Iconify name={icon} />
      </div>
      {label}
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
      <div className="px-6 py-4 flex flex-col items-center justify-between gap-4 bg-white rounded-3xl rounded-ss-none rounded-se-none flex-grow-1 h-full">
        <ul className="flex flex-col gap-2">{featureItems}</ul>
        <button className="px-8 py-3 font-bold text-white duration-300 ease-in-out rounded-full bg-bnext-orange hover:bg-orange-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default function SectionFeature() {
  return (
    <BgPurpleGradient className="relative z-[2] -mt-4">
      <div className="bg-black/30 absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[1]" />
      <Image
        alt="BNEXT"
        src={`/images/product-feature-img.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{
          width: "40%",
          height: "auto",
        }}
      />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] container mx-auto py-20 max-[1027.98px]:py-10 max-[859.98px]:px-4 z-[2]">
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-3 text-left text-white">
            <h2 className="text-3xl font-bold max-[767.98px]:text-3xl">
              Menikmati Fitur Canggih Nggak Harus Mahal!
            </h2>
            <p className="text-lg max-w-[48vw] mx-auto max-[859.98px]:max-w-full max-[859.98px]:px-4 max-[767.98px]:text-sm">
              3 in 1 Digital Smart Box Device Set Top Box (STB), Digital Video
              Broadcasting (DVB) + Over The Top (OTT) dan Internet Model dalam
              satu device
            </p>
          </div>
          <WrapperExperience className="grid grid-cols-3 gap-10 max-w-[80vw] mx-auto max-[1027.98px]:max-w-full max-[1199.98px]:gap-10 max-[1027.98px]:gap-8 overflow-x-auto max-[767.98px]:grid-cols-[repeat(3,_minmax(300px,_1fr))]">
            <ItemExp
              title="Special Package"
              featureItems={
                <Fragment>
                  <FeatureItem
                    icon="mdi:television-speaker"
                    label="Set Top Box (STB) Local TV Channels"
                  />
                  <FeatureItem
                    icon="mdi:television-classic"
                    label="OTT App Channel Provider"
                  />
                  <FeatureItem
                    icon="mdi:web"
                    label="Special Internet Provider Packages"
                  />
                </Fragment>
              }
            />
            <ItemExp
              title="Smart Box + OTT App"
              featureItems={
                <Fragment>
                  <FeatureItem
                    icon="mdi:television-speaker"
                    label="Set Top Box (STB) Local TV Channels"
                  />
                  <FeatureItem
                    icon="mdi:television-classic"
                    label="OTT App Channel Provider"
                  />
                  <FeatureItem
                    icon="mdi:web"
                    label="Special Internet Provider Packages"
                  />
                </Fragment>
              }
            />
            <ItemExp
              title="Smart Box + Internet"
              featureItems={
                <Fragment>
                  <FeatureItem
                    icon="mdi:television-speaker"
                    label="Set Top Box (STB) Local TV Channels"
                  />
                  <FeatureItem
                    icon="mdi:web"
                    label="Special Internet Provider Packages"
                  />
                </Fragment>
              }
            />
          </WrapperExperience>
        </div>
      </div>
    </BgPurpleGradient>
  );
}
