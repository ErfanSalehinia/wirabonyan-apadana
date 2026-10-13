import localFont from "next/font/local";

/**
 * IRANYekanX, self-hosted. Persian numerals ship with the face, so the phone
 * numbers render in the same type as the copy around them.
 *
 * Only the weights the site actually uses are loaded — the family has eleven
 * cuts at ~28KB each, and shipping all of them would cost ~310KB to render
 * five. Adding a weight here is the only step needed to start using it.
 */
export const iranYekan = localFont({
  src: [
    { path: "./woff2/IRANYekanX-Regular.woff2", weight: "400", style: "normal" },
    { path: "./woff2/IRANYekanX-Medium.woff2", weight: "500", style: "normal" },
    { path: "./woff2/IRANYekanX-DemiBold.woff2", weight: "600", style: "normal" },
    { path: "./woff2/IRANYekanX-Bold.woff2", weight: "700", style: "normal" },
    { path: "./woff2/IRANYekanX-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-display",
  fallback: ["Tahoma", "system-ui", "sans-serif"],
});
