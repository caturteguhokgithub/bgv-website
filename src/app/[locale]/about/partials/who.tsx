import React from "react";
import Image from "next/image";

export default function SectionWho() {
  return (
    <div className="relative z-[2]">
      <div className="container mx-auto py-20 max-[1027.98px]:py-10 max-[859.98px]:px-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 text-xl text-justify text-white">
            <h2 className="text-2xl font-semibold ">who we are</h2>
            <Image
              alt="bnext"
              src={`/images/logo-bnext-white.png`}
              width={0}
              height={0}
              sizes="100vw"
              priority
              style={{
                width: "18vw",
                height: "auto",
              }}
            />
            <p className="max-[859.98px]:max-w-full max-[859.98px]:px-4 max-[767.98px]:text-sm font-semibold text-left">
              Menikmati Fitur Canggih Nggak Harus Mahal
            </p>
            <p className="max-[859.98px]:max-w-full max-[859.98px]:px-4 max-[767.98px]:text-sm">
              bnext hadir menawarkan 3 in 1 Digital Smart Box Device yang
              memberikan multi fungsi layanan bagi penggunannya dengan
              mengabungkan Set Top Box (STB), Digital Video Broadcasting (DVB) +
              Over The Top (OTT) dan Internet Model dalam satu device.
            </p>
            <p className="max-[859.98px]:max-w-full max-[859.98px]:px-4 max-[767.98px]:text-sm">
              Misi utama kami memberikan solusi dan kemudahan dengan
              memanfaatkan digital teknologi yang menggabungkan kebutuhan
              modernisasi visual, sehingga dapat menjangkau kebutuhan pengguna
              di seluruh area Indonesia akan siaran digital yang jernih dengan
              pilihan konten tanpa batas didukung ketahanan sinyal yang stabil
              dimanapun Anda berada.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-white">
            <h2 className="text-2xl font-semibold">milestone</h2>
            <div className="flex flex-row gap-10 text-xl text-white">
              <Image
                alt="bnext"
                src={`/images/map-jakarta.png`}
                width={0}
                height={0}
                sizes="100vw"
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 24,
                  objectFit: "cover",
                }}
              />
              <div className="flex flex-col gap-5 text-white">
                <h2 className="text-2xl font-semibold ">2025</h2>
                <div className="flex flex-col gap-2 text-white">
                  <h3 className="text-lg font-semibold ">Headquarters</h3>
                  <p>
                    Centennial Tower Level 29, Unit D-E, Kav. 24-25
                    <br />
                    Jl. Jendral Gatot Subroto No. 27, Karet Semanggi, Setiabudi,
                    Jakarta Selatan
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-white">
                  <h3 className="text-lg font-semibold ">Operational Office</h3>
                  <p>
                    Gedung Jaya – 7 Floor
                    <br />
                    Jl. M.H. Thamrin No.12, RT.2/RW.1, Kb. Sirih, Kec. Menteng,
                    Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
