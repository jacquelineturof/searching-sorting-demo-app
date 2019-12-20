import React, { useState } from 'react'

import Heading from '../../UI/Heading/Heading'
import ButtonContainer from './HomeButtonContainer/HomeButtonContainer'
import Search from '../../Search/Search'

import classes from './Home.module.css'

const Home = () => {
    const [ showComponent, setComponent ] = useState('')
    
    let div = null

    if (showComponent === "search")  div = <Search />

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