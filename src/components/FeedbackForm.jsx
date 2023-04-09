import React, { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext';
import Card from '../shared/Card'
import Button from '../shared/Button';
import { useState } from 'react'
import RatingSelect from './RatingSelect';

// have it in your mind, when we click on the edit button, the form has to know what we have in the editFeedback object, that's why we use useEffect hook
function FeedbackForm() {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10)

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)


    useEffect(() => {
        if (feedbackEdit.edit) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

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
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }

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