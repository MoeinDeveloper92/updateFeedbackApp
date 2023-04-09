import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
function Header({ text, bgColor, txtColor }) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: txtColor
    }


    return (
        <motion.div
            initial={{
                x: '-100%'
            }}
            animate={{
                x: 0
            }}
            transition={{
                duration: 0.5,
                type:'spring'
            }}
        >
            <header style={headerStyles}>

                <div className='container'  >
                    <h2>{text}</h2>
                </div>
            </header>
        </motion.div>

    )
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: 'rgba(0,0,0,0.4)',
    txtColor: "#ff6a95"
}
Header.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    txtColor: PropTypes.string
}

export default Header