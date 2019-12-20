import React from 'react'

import Button from '../../../UI/Button/Button'

import classes from './HomeButtonContainer.module.css'

const HomeButtonContainer = ({ setComponent}) => (
    <div className = { classes.Button_Container }>
        <Button 
            type = "homeButton"
            clicked = { setComponent }
            param = "search">
            Searching
        </Button>
        <Button
            clicked = { setComponent }
            param = "sort" 
            type = "homeButton">
            Sorting
        </Button>
    </div>
)

export default HomeButtonContainer