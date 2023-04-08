import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
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
    )
}

export default About