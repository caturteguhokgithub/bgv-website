"use client";

import LayoutWeb from "@/components/layouts/page";
import SectionBanner from "./partials/banner";
import SectionFeature from "./partials/feature";
import SectionChannel from "./partials/channel";

export default function ProductPage() {
  return (
    <LayoutWeb>
      <SectionBanner />
      <SectionFeature />
      <SectionChannel/>
    </LayoutWeb>
  );
}
