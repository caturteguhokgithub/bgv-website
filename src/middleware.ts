import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "id"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(id|en)/:path*"],
};
