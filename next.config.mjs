// import { withContentlayer } from "next-contentlayer";
// const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	// i18n: {
	// 	locales: ['en', 'fa'],
	// 	defaultLocale: 'en',
	// 	localeDetection: false,
	//   }
};

export default nextConfig;
