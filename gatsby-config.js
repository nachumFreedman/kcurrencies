module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Dimension V2',
    author: 'Hunter Chang',
    description: 'A Gatsby.js V2 Starter based on Dimension by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCgROy0c8cmhcWjWOjqpNhHIafJsecnstw",
          authDomain: "koshercurrencies-1.firebaseapp.com",
          databaseURL: "https://koshercurrencies-1.firebaseio.com",
          projectId: "koshercurrencies-1",
          storageBucket: "koshercurrencies-1.appspot.com",
          messagingSenderId: "764985972544",
          appId: "1:764985972544:web:9f99355fc14cd7b52b0ca5",
          measurementId: "G-1JBN8SXF5X"
        }
      }
    },
    'gatsby-plugin-sass',
  ],
}
