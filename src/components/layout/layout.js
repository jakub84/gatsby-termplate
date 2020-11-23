import React from "react"
import "../../globalStyles/index.scss"
import layoutStyles from "./layout.module.scss"
import Header from "../header/header"
import Footer from "../footer/footer"
import Loader from "../loader/loader"

const Layout = ({ children }) => {
  const showLoader = true
    
  return (
    <div className={layoutStyles.siteContainer}>
      <Header />
      {showLoader ? <Loader /> : ''}
      <main>
        {children}
      </main>
      <Footer />
    </div>

  )
}

export default Layout
