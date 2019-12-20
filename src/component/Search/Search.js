import React, { useState } from 'react'

import ButtonContainer from './SearchButtonContainer/ButtonContainer'

import classes from './Search.module.css'

const Search = () => {
    const [ animation, setAnimation ] = useState('')

    let div = null

    if (animation === "linear")  div = <p>Linear</p>

    return (
        <div className = { classes.Search_Component_Container }>
            <ButtonContainer setAnimation = { setAnimation } />
            { div }
        </div>
    )
}

export default Search