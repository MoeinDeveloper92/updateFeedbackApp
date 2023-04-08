import React from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button';
import { useState } from 'react'
import { isDisabled } from '@testing-library/user-event/dist/utils';
import RatingSelect from './RatingSelect';


function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10)

    const handleChange = (e) => {
        // if there is nothing in the text,there is no point to show meesage, that's why se set it to null;
        if (text === "") {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== "" && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage("Text Must be at Least 10 character")
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
        }
        setText("")
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How Would You Rate Your Service With Us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder='Write a Review'
                        onChange={handleChange}
                        value={text}
                    />
                    <Button type='submit' version={'secondary'} isDisabled={btnDisabled} > Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card >
    )
}

export default FeedbackForm