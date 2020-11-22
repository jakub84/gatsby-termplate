import React from "react"
import Layout from "../components/layout/layout.js"
import { graphql, useStaticQuery } from "gatsby"

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
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => {
          return <li>{edge.node.frontmatter.title}</li>
        })}
      </ul>
    </Layout>
  )
}

export default Home
