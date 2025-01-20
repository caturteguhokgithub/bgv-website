import Image from "next/image";
import Iconify from "@/components/Icon/iconify";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { UnderlineAnimation } from "@/app/[locale]/home/style";

export default function HeaderSection() {
  const t = useTranslations("navbar");
  const pathname = usePathname();
  const path = pathname.split("/").slice(2).join("/");

  const isActive = (lang: string) => pathname.startsWith(`/${lang}`);
  const lang = pathname.split("/")[1];

  const navItems = [
    { name: "home", path: `/${lang}/home` },
    { name: "about", path: `/${lang}/about` },
    { name: "product", path: `/${lang}/product` },
    { name: "promo", path: `/${lang}/promo` },
    { name: "collaboration", path: `/${lang}/collaboration` },
    { name: "faq", path: `/${lang}/faq` },
    { name: "helpCenter", path: `/${lang}/help-center` },
  ];

  return (
    <header className="relative z-[2]">
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center">
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
            <Image
              alt="BGV Website"
              src={`/images/logo.png`}
              width={0}
              height={0}
              sizes="100vw"
              priority
              style={{
                width: "auto",
                height: "60px",
              }}
            />
          </motion.div>
          <div className="flex gap-20">
            <UnderlineAnimation className="flex items-center gap-10 bg-black/35 rounded-full px-8 py-3">
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
            <nav className="flex items-center gap-3 bg-black/35 rounded-full px-8 py-3">
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
                <Iconify name="ph:instagram-logo" color="white" size={24} />
                <Iconify name="mingcute:tiktok-line" color="white" size={24} />
                <div className="rounded-full w-[36px] h-[36px] bg-blue-800 inline-flex items-center justify-center cursor-pointer hover:bg-blue-900 duration-500 ease-in-out">
                  <Iconify
                    name="system-uicons:user-male"
                    color="white"
                    size={24}
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
