import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import "../../globalStyles/index.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>

  )
}

export default Layout
