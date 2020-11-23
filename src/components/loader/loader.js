import React, { useState } from "react"
import loaderStyles from "./loader.module.scss"

const Loader = () => {
  const [isActive, setActive] = useState("false")

  let mouseDown = false
  const fClick = () => {
    console.log("click")
    mouseDown = false
  }

  const fMDown = (e) => {
    console.log("mouse down")
    e.preventDefault()
    setActive(!isActive)
    mouseDown = true
  }

  const fMU = () => {
    console.log("mouse up")
    mouseDown = false
    setActive(!isActive)
  }

  const fMM = e => {
    if (!mouseDown) return
    console.log("mouse move")
    // e.preventDefault()
  }

  return (
    <section
      role="dialog"
      onMouseDown={fMDown}
      onMouseUp={fMU}
      onMouseMove={fMM}
      onClick={fClick}
      className={`${loaderStyles.container} ${isActive ? "" : loaderStyles.red}`}
    >
      <span>Loader ...</span>
    </section>
  )
}

export default Loader
