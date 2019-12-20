import React from 'react'

import Button from '../../../UI/Button/Button'

import classes from './HomeButtonContainer.module.css'

const HomeButtonContainer = ({ setComponent}) => (
    <div className = { classes.Button_Container }>
        <Button 
            type = "componentButton"
            clicked = { setComponent }
            param = "search"
            isHome = { true }>
            Searching
        </Button>
        <Button
            clicked = { setComponent }
            param = "sort" 
            type = "componentButton"
            isHome = { true }>
            Sorting
        </Button>
    </div>
)

export default HomeButtonContainer