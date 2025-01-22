import Link from "next/link";
import Image from "next/image";
import { UnderlineAnimation } from "@/app/[locale]/home/style";

const FooterCol = ({
  title,
  data,
}: {
  title: string;
  data: { url: string; label: string }[];
}) => {
  return (
    <div className="inline-flex flex-col gap-3 text-white">
      <h3 className="font-semibold max-[767.98px]:text-sm">{title}</h3>
      <ul className="inline-flex flex-col gap-2">
        {data.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className="duration-300 ease-linear hover:text-white/80 max-[767.98px]:text-sm"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function FooterSection() {
  return (
    <footer className="relative z-[2]">
      <div className="container py-8 mx-auto max-[679.98px]:px-4">
        <div className="flex flex-col gap-8">
          <section className="flex items-start justify-between gap-20 max-[1199.98px]:flex-col max-[1199.98px]:gap-10">
            <UnderlineAnimation className="grid grid-cols-4 gap-20 max-[575.98px]:grid-cols-2 max-[575.98px]:gap-10 max-[575.98px]:w-full">
              <FooterCol
                title="Infinitech+ Product"
                data={[
                  { url: "", label: "Smart Box 3 in 1" },
                  { url: "", label: "OTT Channels" },
                  { url: "", label: "Internet Provider" },
                ]}
              />
              <FooterCol
                title="Infinitech+ Business"
                data={[
                  { url: "", label: "Official Partnership" },
                  { url: "", label: "Official Store" },
                  { url: "", label: "Freelance Agency" },
                ]}
              />
              <FooterCol
                title="General"
                data={[
                  { url: "", label: "Privacy Policy" },
                  { url: "", label: "Terms of Service" },
                  { url: "", label: "Legal Disclaimer" },
                ]}
              />
              <FooterCol
                title="Others"
                data={[
                  { url: "", label: "Location" },
                  { url: "", label: "Retur" },
                  { url: "", label: "Careers" },
                ]}
              />
            </UnderlineAnimation>
            <div className="inline-flex flex-col gap-3 text-white">
              <h3 className="font-semibold max-[767.98px]:text-sm">
                Download Infinitech+ di
              </h3>
              <div className="inline-flex gap-3">
                <Image
                  alt="BGV Website"
                  src={`/images/download-google-play.png`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  style={{
                    width: "auto",
                    height: "60px",
                  }}
                />
                <Image
                  alt="BGV Website"
                  src={`/images/download-app-store.png`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  style={{
                    width: "auto",
                    height: "60px",
                  }}
                />
              </div>
            </div>
          </section>
          <hr className="bg-white/70 h-[2px] w-full border-none"></hr>
          <p className="text-center text-white/70 max-[767.98px]:text-sm">
            Copyright &copy; {new Date().getFullYear()} Infinitech+. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
