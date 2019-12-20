import React from 'react'

import classes from './Button.module.css'

/* 
    Button UI Component.
    TYPE: determines the button returned by our switch statement.
    CHILDREN: Will be used for the button label.
    CLICKED: click handler
    PARAM: a param that needs to be bound to the click handler
*/
const Button = ({ type, children, clicked, param }) => {
    switch ( type ) {
        case 'homeButton':
            return (
                <button
                    onClick = { () => clicked(param)} 
                    className = { classes.Home_Button }>
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