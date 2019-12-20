import React from 'react'

import classes from './Button.module.css'

/* 
    Button UI Component.
    TYPE: determines the button returned by our switch statement.
    CHILDREN: Will be used for the button label.
    CLICKED: click handler
    PARAM: a param that needs to be bound to the click handler
*/
const Button = ({ type, children, clicked, param, isHome }) => {
    switch ( type ) {
        case 'componentButton':
            return (
                <button
                    onClick = { () => clicked(param)} 
                    className = { isHome ? classes.Home_Button : classes.Component_Button }>
                    { children }
                </button>
            )
        default: 
            return (
                <button>
                    { children }
                </button>
            )
    }
}

export default Button