import React from "react"
import Layout from "../components/layout/layout"
import Slider from "../components/slider/slider"
import SiteContainer from "../components/layoutComponents/siteContainer/siteContainer" 
import {Link, graphql, useStaticQuery } from "gatsby"

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SiteContainer>
        <Slider />
      </SiteContainer>
    </Layout>
  )
}

export default Home
