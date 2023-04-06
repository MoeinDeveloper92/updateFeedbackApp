import React, { useState } from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState("This is a text from the state")

    const handleClick = () => {
        setRating((prev) => {
            console.log(prev)
            return prev + 1
        })
    }
    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FeedbackItem