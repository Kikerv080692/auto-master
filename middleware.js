import { createMiddleware } from "next-intl/middleware";

export default createMiddleware({
  locales: ["cz", "ru", "ua"],
  defaultLocale: "cz",
  localeDetection: false, // Disable automatic locale detection to respect selected locale
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
