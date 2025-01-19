/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

const nextConfig: NextConfig = {
  // i18n: {
  //   locales: ["en", "id"],
  //   defaultLocale: "en",
  // },
};

export default withNextIntl(nextConfig);
