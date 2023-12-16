/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	async rewrites() {
		return []
	},
	output: 'standalone',
}

module.exports = nextConfig
