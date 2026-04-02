/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},

  webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "sonalskushie.com", // Non-www domain
          },
        ],
        destination: "https://www.sonalskushie.com/:path*", // Redirect to www
        permanent: true, // 301 redirect
      },
    ];
  },

  reactCompiler: true,
};

export default nextConfig;
