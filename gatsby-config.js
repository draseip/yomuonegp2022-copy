module.exports = {
  siteMetadata: {
    title: `読ム-１グランプリ2023 特設サイト`,
    author: `@Yomu_1GP2022`,
    description: `合成音声によるコンプラ無用の漫才大会！`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2023年度 読ム-１グランプリ`,
        short_name: `読ム-１GP 2023`,
        start_url: `/`,
        background_color: `#800000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/yomuonecircle.png`, // This path is relative to the root of the site.
      },
      // resolve: `gatsby-plugin-canonical-urls`,
      // options: {
        // siteUrl: `https://www.example.com`,
      // },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true,
        disavle: false,
        selector: '[data-sal]',
        animateClassName: 'sal-animate',
        disabledClassName: 'sal-disabled',
        rootMargin: '0% 50%',
        enterEventName: 'sal:in',
        exitEventName: 'sal:out',
      }
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
    },
},
  ],
  pathPrefix: `/img`,
}
