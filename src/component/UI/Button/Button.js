import React from 'react'

import classes from './Button.module.css'

/* 
    Button UI Component.
    TYPE: determines the button returned by our switch statement.
    CHILDREN: Will be used for the button label.
*/
const Button = ({ type, children }) => {
    switch ( type ) {
        case 'homeButton':
            return (
                <button className = { classes.Home_Button }>
                    { children }
                </button>
            )
        default: 
            return (
                <button>

                </button>
            )
    }
}

export default Button