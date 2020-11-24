import React from "react"
import Navigation from "../header/navigation/navigation"
import headerStyles from "./header.module.scss"
import SiteContainer from "../layoutComponents/siteContainer/siteContainer"
import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <SiteContainer>
      <header className={headerStyles.mainHeader}>
        <h1 className={headerStyles.title}>{data.site.siteMetadata.title}</h1>
        <Navigation />
      </header>
    </SiteContainer>
  )
}

export default Header
