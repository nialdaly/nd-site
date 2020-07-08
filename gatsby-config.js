module.exports = {
  plugins: [{
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "nialdaly.com",
        protocol: "https",
        hostname: "www.nialdaly.com",
      },
    },
],
}
