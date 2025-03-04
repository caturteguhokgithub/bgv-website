"use client";

import LayoutWeb from "@/components/layouts/page";
import SectionBanner from "./partials/banner";
import SectionWho from "./partials/who";

export default function AboutPage() {
  return (
    <LayoutWeb>
      <SectionBanner />
      <SectionWho />
    </LayoutWeb>
  );
}
