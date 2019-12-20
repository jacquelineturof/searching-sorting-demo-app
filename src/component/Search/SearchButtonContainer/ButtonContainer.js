import React from 'react'

import Button from '../../UI/Button/Button'

import classes from './ButtonContainer.module.css'

const ButtonContainer = ({ setAnimation }) => (
    <div className = { classes.Search_Button_Container }>
        <Button 
            type = "componentButton"
            isHome = { false }
            clicked = { setAnimation }
            param = "linear">
            Linear
        </Button>
        <Button 
            type = "componentButton"
            isHome = { false }
            clicked = { setAnimation }
            param = "binary">
            Binary
        </Button>
    </div>
)

export default ButtonContainer