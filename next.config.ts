import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_EXPORT === "1";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      images: { unoptimized: true },
      assetPrefix: ".",
    }
  : {};

export default nextConfig;
