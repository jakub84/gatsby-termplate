import React from "react"
import { Link } from "gatsby"
import navigationStyles from "./navigation.module.scss"

const Navigation = () => {
  return (
    <nav className = {navigationStyles.mainNavigation}>
      <ul>
        <li>
          <Link activeClassName = {navigationStyles.active} to="/">navigation item</Link>
        </li>
        <li>
          <Link activeClassName = {navigationStyles.active} to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
