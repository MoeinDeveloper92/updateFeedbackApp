import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function About() {
    return (
        <motion.div
            initial={{
                x: '-100%',
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 1,
                type: 'spring',
                damping: 10
            }}
        >
            <div className='about'>
                <h3>Beta Version of Feedback Applcaiton</h3>
                <p>
                    This application is fully made by Moein Samani Which is a demo version of the Feedback Application
                </p>
                <p>
                    On top of taht, the aim of this applcaiton is to show how react components and pretained libraries are going to work well together
                </p>
                <Link to={"/"}>Back to Home</Link>
            </div>
        </motion.div>

    )
}

export default About