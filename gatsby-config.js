module.exports = {
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "./src/styles/mixins.scss"; 
        @import "./src/styles/variables.scss"; 
        @import "./src/styles/globals.scss";`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /img/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/img/favicon.png',
      },
    },
  ],
};
