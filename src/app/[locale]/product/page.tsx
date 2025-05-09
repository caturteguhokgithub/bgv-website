"use client";

import LayoutWeb from "@/components/layouts/page";
import SectionBanner from "./partials/banner";
import SectionFeature from "./partials/feature";
import SectionChannel from "./partials/channel";
import SectionPackage from "./partials/package";

export default function ProductPage() {
  return (
    <LayoutWeb>
      <SectionBanner />
      <SectionFeature />
      <SectionChannel />
      <SectionPackage />
    </LayoutWeb>
  );
}
