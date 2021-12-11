const withTM = require('next-transpile-modules')(['gsap']);
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');


const nextConfig = {
    images: {
        domains: ['ipfs.io'],
    },
}
module.exports = withPlugins([
	[withTM({
			test: /\.(jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: ['@svgr/webpack'],
		})]
	], nextConfig);
