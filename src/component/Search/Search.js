import React from 'react'

import Button from '../UI/Button/Button'

import classes from './Search.module.css'

const Search = () => (
    <div className = { classes.Search_Component_Container }>
        <div>
            <Button 
                type = "componentButton"
                isHome = { false }>
                Linear
            </Button>
            <Button 
                type = "componentButton"
                isHome = { false }>
                Binary
            </Button>
        </div>
    </div>
)

export default Search