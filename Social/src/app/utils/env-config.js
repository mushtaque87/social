const envConfig = {
  env: process.env.NODE_ENV,
  isDebug: !!process.env.DEBUG,
  buildId: process.env.BUILD_ID,
  website_url: process.env.SPHERIUM_WEBSIITE
};

export default envConfig;
