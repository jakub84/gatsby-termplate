import React from "react"
import Layout from "../components/layout/layout.js"
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
      <ul>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.fields.slug}>
              <h2><Link to={`/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link></h2>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Home
