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
};

export default nextConfig;
