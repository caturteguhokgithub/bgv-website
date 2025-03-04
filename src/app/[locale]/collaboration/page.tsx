"use client";

import LayoutWeb from "@/components/layouts/page";
import SectionBanner from "./partials/banner";
import SectionService from "./partials/service";

export default function CollaborationPage() {
  return (
    <LayoutWeb>
      <SectionBanner />
      <SectionService />
    </LayoutWeb>
  );
}
