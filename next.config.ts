import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Ensure Pages Router is properly configured alongside App Router
  // The default is true in Next.js 13+ which can cause issues with mixed routing
  useFileSystemPublicRoutes: true,
};

export default nextConfig;
