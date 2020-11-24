import React from "react"
import SiteContainerStyles from "./siteContainer.module.scss"

const SiteContainer = ({ children }) => {
  return <div className={SiteContainerStyles.container}>{children}</div>
}

export default SiteContainer
