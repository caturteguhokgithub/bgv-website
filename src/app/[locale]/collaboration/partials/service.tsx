import React from "react";
import Image from "next/image";
import { WrapperExperience } from "../../home/style";

export default function SectionService() {
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
        <div className="relative flex flex-col items-center gap-6">
          <Image
            alt="BNEXT"
            src={`/images/${img}.jpg`}
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 24,
            }}
          />
          <div className="absolute top-0 left-0 flex flex-col w-full gap-3 p-10 text-left">
            <Image
              alt="BNEXT"
              src={`/images/logo-bnext-white.png`}
              width={0}
              height={0}
              sizes="100vw"
              priority
              style={{
                width: "50%",
                height: "auto",
              }}
            />
            <h3 className="text-3xl text-white font-bold max-w-[50%] max-[767.98px]:text-2xl">
              {title}
            </h3>
            <p className="text-lg text-white max-[767.98px]:text-sm">{desc}</p>
          </div>
          <div className="flex justify-center w-full ">
            <button className="w-[70%] px-8 py-3 font-bold text-white duration-300 ease-in-out rounded-full bg-bnext-orange hover:bg-orange-700">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative z-[2] -mt-[40vh]">
      <div className="container mx-auto py-20 max-[1027.98px]:py-10 max-[859.98px]:px-4">
        <h3 className="text-3xl text-white font-bold max-[767.98px]:text-2xl text-center mb-10">
          Pilih Jenis Layanan Sesuai Kebutuhan Usaha Anda
        </h3>
        <WrapperExperience className="grid grid-cols-3 gap-20 max-w-[70vw] mx-auto max-[1027.98px]:max-w-full max-[1199.98px]:gap-10 max-[1027.98px]:gap-8 overflow-x-auto max-[767.98px]:grid-cols-[repeat(3,_minmax(300px,_1fr))]">
          <ItemExp
            img="service-img-1"
            title="Freelance Agency"
            desc="Ubah Waktu Luangmu Jadikan Peluang Penghasilanmu Tanpa Batas!"
          />
          <ItemExp
            img="service-img-2"
            title="Official Store"
            desc="Saatnya Tumbuh Bersama Menjadi Kemitraan Resmi Toko Kami Dan Nikmati Manfaat Tanpa Batas!"
          />
          <ItemExp
            img="service-img-3"
            title="Official Partnership"
            desc="Jadilah Bagian dari Mitra Resmi Kami dan Nikmati Berbagai Keuntungan!"
          />
        </WrapperExperience>
      </div>
    </div>
  );
}
