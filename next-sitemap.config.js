// eslint-disable-next-line import/no-anonymous-default-export
export default {
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
