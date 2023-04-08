import React from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button';
import { useState } from 'react'
import { isDisabled } from '@testing-library/user-event/dist/utils';
function FeedbackForm() {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }


    return (
        <Card>
            <form>
                <h2>How Would You Rate Your Service With Us?</h2>
                {/* @todo - Rating Selecet Componenet */}
                <div className="input-group">
                    <input
                        type="text"
                        placeholder='Write a Review'
                        onChange={handleChange}
                        value={text}
                    />
                    <Button type='submit' version={'secondary'}> Send</Button>
                </div>
            </form>
        </Card >
    )
}

export default FeedbackForm