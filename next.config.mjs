/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.worldvectorlogo.com',
			},
			{
				protocol: 'https',
				hostname: 'placeholder.com',
			},
		],
	},
	// Aggressive caching for sequence frames — they're immutable assets
	async headers() {
		return [
			{
				source: '/sequence-webp/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		];
	},
};

export default nextConfig;
