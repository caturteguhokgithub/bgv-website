import React, { CSSProperties, MouseEventHandler } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iconify from "@/components/Icon/iconify";
import { BoxSlider } from "../style";
export interface DataType {
  image?: string;
  title?: string;
  url?: string;
}

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const data: DataType[] = [
  {
    image: "slider-product-1",
    title: "Handsome Guys",
  },
  {
    url: "https://picsum.photos/id/111/1440/670",
    title: "Lost in Love",
  },
  {
    url: "https://picsum.photos/id/164/1440/670",
    title: "My Love Mix-Up",
  },
  {
    url: "https://picsum.photos/id/454/1440/670",
    title: "How to Spot a Red Flag",
  },
  {
    url: "https://picsum.photos/id/444/1440/670",
    title: "Running Man",
  },
];

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

export default function SectionBanner() {
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
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <BoxSlider className={`slider-container`}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <CardItem image={item.image} url={item.url} />
            </div>
          ))}
        </Slider>
      </BoxSlider>
    </div>
  );
}
