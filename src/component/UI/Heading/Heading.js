import React from 'react'

import classes from './Heading.module.css'

const Heading = () => (
    <div className = { classes.Heading_Container }>
        <h1 className = { classes.Heading }>
            Javascript Algorithms
        </h1>
        <p className = { classes.Sub_Heading }>
            Look through a collection of Javascript searching and sorting
            algorithms to improve your code.
        </p>
    </div>
)

export default Heading