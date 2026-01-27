import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'dist',
  output: 'export', // Necesario para que Wrangler Pages pueda servir los archivos estáticos desde ./dist
  images: {
    unoptimized: true, // Requerido para output: 'export'
  },
};

export default nextConfig;
