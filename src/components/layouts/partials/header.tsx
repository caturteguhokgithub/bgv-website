import Image from "next/image";
import Iconify from "@/components/Icon/iconify";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { UnderlineAnimation } from "@/app/[locale]/home/style";
import { Fragment } from "react";
import Drawer from "./drawer";
import React from "react";

export default function HeaderSection() {
  const [isOpen, setIsOpen] = React.useState(false);

  const t = useTranslations("navbar");
  const pathname = usePathname();
  const path = pathname.split("/").slice(2).join("/");

  const isActive = (lang: string) => pathname.startsWith(`/${lang}`);
  const lang = pathname.split("/")[1];

  const navItems = [
    // { name: "home", path: `/${lang}/home` },
    { name: "about", path: `/${lang}/about` },
    { name: "product", path: `/${lang}/product` },
    { name: "promo", path: `/${lang}/promo` },
    { name: "collaboration", path: `/${lang}/collaboration` },
    // { name: "faq", path: `/${lang}/faq` },
    // { name: "helpCenter", path: `/${lang}/help-center` },
  ];

  return (
    <Fragment>
      <header className="relative z-[2]">
        <div className="container py-4 mx-auto max-[1023.98px]:py-4 max-[679.98px]:px-4">
          <div className="flex items-center justify-between">
            <motion.div
              exit={{
                y: -20,
                opacity: 0,
                filter: "blur(15px)",
                transition: { ease: "easeIn", duration: 5 },
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: { type: "spring", duration: 5 },
              }}
            >
              <Link href="/">
                <Image
                  alt="BGV Website"
                  src={`/images/logo-bnext-full.png`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  className="max-[1023.98px]:!h-[50px]"
                  style={{
                    width: "auto",
                    height: "80px",
                  }}
                />
              </Link>
            </motion.div>
            <div className="flex gap-10 max-[1279.98px]:gap-4 max-[679.98px]:gap-2">
              <UnderlineAnimation className="flex items-center gap-10 bg-black/35 rounded-full px-8 py-3 max-[1279.98px]:hidden">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className={`capitalize ${
                      pathname.includes(item.path)
                        ? "text-white font-bold"
                        : "text-white/60  "
                    }`}
                  >
                    <Link href={item.path}>{t(item.name)}</Link>
                  </div>
                ))}
              </UnderlineAnimation>
              <nav className="flex items-center gap-3 px-8 py-3 rounded-full bg-black/35 max-[679.98px]:px-4">
                <UnderlineAnimation className="inline-flex items-center gap-2">
                  <div
                    className={`${
                      isActive("id") ? "text-white font-bold" : "text-white/60"
                    }`}
                  >
                    <Link href={`/id/${path}`}>ID</Link>
                  </div>
                  <div className="text-white/60">|</div>
                  <div
                    className={`${
                      isActive("en") ? "text-white font-bold" : "text-white/60"
                    }`}
                  >
                    <Link href={`/en/${path}`}>EN</Link>
                  </div>
                </UnderlineAnimation>
                <div className="inline-flex items-center gap-3">
                  <div
                    className="inline-flex items-center gap-3 
                max-[679.98px]:hidden"
                  >
                    <Iconify name="ph:instagram-logo" color="white" size={24} />
                    <Iconify
                      name="mingcute:tiktok-line"
                      color="white"
                      size={24}
                    />
                  </div>
                  <div className="rounded-full w-[36px] h-[36px] bg-blue-800 inline-flex items-center justify-center cursor-pointer hover:bg-blue-900 duration-500 ease-in-out">
                    <Iconify
                      name="system-uicons:user-male"
                      color="white"
                      size={24}
                    />
                  </div>
                </div>
              </nav>
              <nav
                className="items-center justify-center gap-3 bg-black/35 rounded-full w-[60px] h-[60px] hidden max-[1279.98px]:flex duration-500 ease-in-out hover:bg-blue-600/35 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <Iconify
                  name="line-md:menu-fold-left"
                  color="white"
                  size={24}
                />
              </nav>
            </div>
          </div>
        </div>
      </header>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col justify-between h-full px-6 py-7">
          <UnderlineAnimation className="flex flex-col gap-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className={`capitalize ${
                  pathname.includes(item.path)
                    ? "text-white font-bold"
                    : "text-white/80"
                }`}
              >
                <Link href={item.path}>{t(item.name)}</Link>
              </div>
            ))}
          </UnderlineAnimation>
          <div className="flex flex-col gap-4">
            <p className="text-white/70">Our Social Media</p>
            <ul className="flex flex-col gap-3">
              <li className="inline-flex items-center gap-2">
                <Iconify name="ph:instagram-logo" color="white" size={24} />
                <span className="text-white">bnext</span>
              </li>
              <li className="inline-flex items-center gap-2">
                <Iconify name="mingcute:tiktok-line" color="white" size={24} />
                <span className="text-white">@bnext</span>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
}
