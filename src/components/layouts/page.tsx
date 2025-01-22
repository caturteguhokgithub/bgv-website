"use client";

import Image from "next/image";
import FooterSection from "./partials/footer";
import HeaderSection from "./partials/header";
import { motion } from "motion/react";

export default function LayoutWeb({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-auto">
      <Image
        alt="BGV Website"
        src={`/images/ornament-1.png`}
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 0,
        }}
      />
      <Image
        alt="BGV Website"
        src={`/images/ornament-2.png`}
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: 1,
        }}
      />
      <HeaderSection />
      <main className="relative z-[2]">{children}</main>
      <FooterSection />
      <div>
        <motion.div
          exit={{
            y: -20,
            opacity: 0,
            filter: "blur(15px)",
            transition: { ease: "easeIn", duration: 10 },
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", duration: 10 },
          }}
          style={{
            position: "fixed",
            right: 32,
            bottom: 100,
            zIndex: 3,
          }}
          className="duration-500 ease-in-out hover:!bottom-[120px]"
        >
          <Image
            alt="BGV Website"
            src={`/images/icon-cs.png`}
            className="relative duration-500 ease-in-out opacity-50 cursor-pointer hover:opacity-100"
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{
              width: "100px",
              height: "auto",
            }}
          />
        </motion.div>
      </div>
      <Image
        alt="BGV Website"
        src={`/images/ornament-1.png`}
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          left: 0,
          bottom: 0,
          zIndex: 0,
          transform: "scale(-1, -1)",
        }}
      />
      <Image
        alt="BGV Website"
        src={`/images/ornament-2.png`}
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          right: 0,
          bottom: 0,
          zIndex: 1,
          transform: "scale(-1, -1)",
        }}
      />
    </div>
  );
}
