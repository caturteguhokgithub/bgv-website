"use client";

import LayoutWeb from "@/components/layouts/page";
import { motion } from "motion/react";
// import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  // const t = useTranslations("home");

  return (
    <LayoutWeb>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-5">
        <motion.div
          exit={{
            y: -20,
            opacity: 0,
            filter: "blur(5px)",
            transition: { ease: "easeIn", duration: 5 },
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", duration: 5 },
          }}
        >
          <Image
            alt="BGV"
            src={`/images/logo.png`}
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{
              width: "auto",
              height: "16vh",
            }}
          />
        </motion.div>

        {/* <h1 className="text-lg uppercase text-yellow-dark-arava">
          {t("title")}
        </h1> */}
      </div>
    </LayoutWeb>
  );
}
