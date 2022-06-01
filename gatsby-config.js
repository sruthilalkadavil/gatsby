/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  
  plugins: [`gatsby-plugin-sass`, 
  `gatsby-transformer-remark`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-mdx`,
   
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `Projects`,
      path: `${__dirname}/src/Projects/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/src/blog/`,
    },
  },
  {
    resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `/svg/`
        }
      }
  },
  {
    resolve: `gatsby-source-graphql`,
    options: {
      typeName: `GitHub`,
      fieldName: `github`,
      url: `https://api.github.com/graphql`,
      headers: {
        Authorization: `Bearer your-github-token`,
      },
    },
  },
   
   
],

  siteMetadata: {
    title: "web design",
    description:'web dev portfolio',
    }
}
