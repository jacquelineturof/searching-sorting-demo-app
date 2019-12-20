import React from 'react'

import Heading from '../../UI/Heading/Heading'
import Button from '../../UI/Button/Button'

import classes from './Home.module.css'

const Home = () => (
    <section className = { classes.Home }>
        <Heading />
        <div className = { classes.Button_Container }>
            <Button type = "homeButton">Searching</Button>
            <Button type = "homeButton">Sorting</Button>
        </div>
    </section>
)

export default Home