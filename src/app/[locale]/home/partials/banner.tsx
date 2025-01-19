import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export interface DataType {
  image?: string;
  title?: string;
}

export const data: DataType[] = [
  {
    image: "slider-image",
    title: "Handsome Guys",
  },
  {
    image: "slider-image",
    title: "Lost in Love",
  },
  {
    image: "slider-image",
    title: "My Love Mix-Up",
  },
  {
    image: "slider-image",
    title: "How to Spot a Red Flag",
  },
  {
    image: "slider-image",
    title: "Running Man",
  },
];

export const CardItem = ({ image }: { image?: string }) => {
  return (
    <div className="relative">
      <Image
        alt="BGV"
        src={`/images/${image}.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default function SectionBaner() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {data.map((item, index) => (
          <div className={`keen-slider__slide cursor-pointer`} key={index}>
            <CardItem image={item.image} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-[16px] left-1/2 -translate-x-0.5">
        {loaded && instanceRef.current && (
          <div className="inline-flex flex-row justify-center items-center gap-2">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <div key={idx}>
                  <button
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      `duration-500 ease-in-out dot p-0 m-0 min-w-0 w-[16px] h-[16px] rounded-full ${
                        currentSlide === idx ? "bg-blue-600" : "bg-blue-600/20"
                      }` + (currentSlide === idx ? " active" : "")
                    }
                  ></button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
