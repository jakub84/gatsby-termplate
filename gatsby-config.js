
module.exports = {
  siteMetadata: {
    title: 'Gatsby template',
    author: 'Qbson'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images', 
            options: {
              // maxWidth: 750,
              // linkImagesToOriginal: false
            }
          }
        ]

      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['text-regular']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/markdowns/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
}
