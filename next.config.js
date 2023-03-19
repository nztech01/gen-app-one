const dotenv = require('dotenv')

dotenv.config();


module.exports = { 
  publicRuntimeConfig:{
    apiKey: process.env.API_KEY}

};

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}