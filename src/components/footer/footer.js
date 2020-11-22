import React from 'react'
import footerStyles from "./footer.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata { 
              author
            }
        }
    }
`)
    return (
        <footer className= {footerStyles.mainFooter}>
            Author: {data.site.siteMetadata.author}
        </footer>
    )
}

export default Footer