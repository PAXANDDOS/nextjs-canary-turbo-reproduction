import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // R:\test\apps\docs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // transpilePackages: ['@repo/ui'],
    // outputFileTracingRoot: path.resolve(__dirname, '../../'), // R:\test
    turbopack: { root: path.resolve(__dirname, '../../') }, // R:\test
};

export default nextConfig;
