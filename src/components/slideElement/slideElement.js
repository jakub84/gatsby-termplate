import React from "react"
import slideElementStyles from "./slideElement.module.scss"

const SlideElement = (props) => {
    return (
        <div className = {slideElementStyles.container}>
           This is a title {props.title} <br />
           This is a link {props.link}
        </div>
    )
}

export default SlideElement