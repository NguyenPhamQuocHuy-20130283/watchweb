import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // --- Cấu hình sẵn có của bạn ---
  allowedDevOrigins: ["http://localhost:3000"],
  redirects: async () => {
    return [
      {
        source: "/r",
        destination: "/roadmap",
        permanent: false,
      },
    ];
  },
  // --- Hết phần cấu hình của bạn ---

  // ✅ BẠN CHỈ CẦN THÊM PHẦN `headers` NÀY VÀO
  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' blob: data: ui-avatars.com;
      font-src 'self';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      upgrade-insecure-requests;
    `
      .replace(/\s{2,}/g, " ")
      .trim();

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
