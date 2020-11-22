import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import "../../globalStyles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.siteContainer}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>

  )
}

export default Layout
