import React from 'react'
import Navigation from "../header/navigation/navigation"
import headerStyles from "./header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.mainHeader}>
            <h1 className={headerStyles.title}>This is title of page</h1>
            <Navigation />
        </header>
    )
}

export default Header