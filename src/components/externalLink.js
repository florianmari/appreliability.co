import React from "react"

export default ({ link, name, className }) => (
    <a href={link} className={className}>{name}</a>
)