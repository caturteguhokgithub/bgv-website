"use client";

import LayoutWeb from "@/components/layouts/page";
import SectionBanner from "./partials/banner";
import SectionExperience from "./partials/experience";

export default function HomePage() {
  return (
    <LayoutWeb>
      <SectionBanner />
      <SectionExperience />
    </LayoutWeb>
  );
}
