import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: "This text is comming from Context"
        },
        {
            id: 2,
            rating: 9,
            text: 'This text is comming from Another Context'
        },
        {
            id: 3,
            rating: 7,
            text: "This is the third text which is again comming from another contet"
        }
    ])

    // Delete function
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure that You want to delete this Feedback???")) {
            setFeedback(feedback.filter((item) => (
                item.id !== id
            )))
        }
    }
    // Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }


    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext