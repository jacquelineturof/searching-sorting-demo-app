import React, { useState } from 'react'

import Heading from '../../UI/Heading/Heading'
import ButtonContainer from './HomeButtonContainer/HomeButtonContainer'

import classes from './Home.module.css'

const Home = () => {
    const [ showComponent, setComponent ] = useState('')
    
    let div = null

    if (showComponent === "search") {
        div = (
            <p>Search</p>
        )
    }

    if (showComponent === "sort") {
        div = (
            <p>Sort</p>
        )
    }

    return (
        <section className = { classes.Home }>
            <Heading />
            <ButtonContainer setComponent = { setComponent } />
            { div }
        </section>
    )
}

export default Home