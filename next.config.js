const CopyPlugin = require("copy-webpack-plugin");

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
	rewrites: async () => {
		return [
		  {
			source: "/projects/:projectSlug",
			destination: "/projects/:projectSlug/index.html",
		  }
		]
	}
  }
  
  module.exports = nextConfig