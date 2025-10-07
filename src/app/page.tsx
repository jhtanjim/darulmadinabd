"use client";

import dynamicImport from "next/dynamic";

const HomeClient = dynamicImport(() => import("./home-client"), {
  ssr: false,
});

export default function Home() {
  return <HomeClient />;
}
