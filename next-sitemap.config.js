module.exports = {
  siteUrl: "https://manedigital.ru",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [],
  },
  outDir: "out",
};
