// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: 'export',
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  exportTrailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
