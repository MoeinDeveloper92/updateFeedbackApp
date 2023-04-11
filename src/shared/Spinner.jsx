import React from 'react'
import spinner from '../assets/spinner.gif'
function Spinner() {
    return (

        <img style={{ width: '100px', margin: 'auto', display: 'block' }} src={spinner} alt='Loading...' />

    )
}

export default Spinner