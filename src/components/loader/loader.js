import React from "react"
import loaderStyles from "./loader.module.scss"


const Loader = () => {
    return(
        <section className = {loaderStyles.container}>
            <span>Loader ...</span>
        </section>
    )
}

export default Loader