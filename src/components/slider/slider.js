import React from "react"
import SliderStyles from "./sliderStyles.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import SlideElement from "../slideElement/slideElement"

const Slider = () => {
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
  const { edges } = data.allMarkdownRemark
  return (
    <div className= {SliderStyles.container}>
        {edges.map(sindleElement => {
          return (
              <SlideElement
                key={sindleElement.node.fields.slug}
                title = {sindleElement.node.frontmatter.title}
                link = {`/${sindleElement.node.fields.slug}`}
              />
          )
        })}

    </div>
  )
}

export default Slider
