module.exports = {
  siteMetadata: {
    title: 'KCurrencies',
    author: 'Nachum Freedman',
    description: 'Kosher Currencies',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'kcurrencies',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'favicon.ico', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
