import React, { CSSProperties, MouseEventHandler } from "react";
import Image from "next/image";
import { BgPurpleGradient, BoxSlider } from "../style";
import Iconify from "@/components/Icon/iconify";
import Slider from "react-slick";

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

interface DataType {
  image?: string;
  bgColor?: string;
  title?: string;
  imgWidth?: string;
  href?: string;
}

function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Iconify name="mdi:chevron-right" size={70} color="white" />
    </div>
  );
}

function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Iconify name="mdi:chevron-left" size={70} color="white" />
    </div>
  );
}

const settings = {
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export const data: DataType[] = [
  {
    image: "viu",
    title: "viu",
    href: "https://www.viu.com/ott/id",
  },
  {
    image: "cubmu",
    title: "Cubmu",
    imgWidth: "30%",
    href: "https://www.cubmu.com/",
  },
  {
    image: "kino",
    title: "Kino TV",
    imgWidth: "50%",
    href: "https://spiintl.com/channels/kinotv",
  },
  {
    image: "wetv",
    title: "We TV",
    href: "https://wetv.vip/id",
  },
];

export const CardItem = ({
  image,
  url,
  href,
}: {
  image?: string;
  url?: string;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className="relative flex items-center justify-center bg-white rounded-full w-[120px] h-[120px]"
    >
      <Image
        alt="BNext"
        src={url ? `${url}` : `/images/${image}.png`}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "50%",
          height: "auto",
          objectPosition: "center",
        }}
      />
    </a>
  );
};

export default function SectionChannel() {
  return (
    <BgPurpleGradient className="relative z-[2]">
      {/* <div className="bg-black/30 absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[1]" /> */}
      <Image
        alt="BNEXT"
        src={`/images/product-channel-img.jpg`}
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
              Beragam pilihan spesial aplikasi film, hiburan dan gamas
              favoritmu.
            </p>
          </div>
          <BoxSlider className="slider-container max-w-[100vw] overflow-hidden w-full">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index}>
                  <CardItem image={item.image} href={item.href} />
                </div>
              ))}
            </Slider>
          </BoxSlider>
        </div>
      </div>
    </BgPurpleGradient>
  );
}
