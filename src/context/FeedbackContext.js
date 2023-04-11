import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const res = await fetch("http://localhost:3000/feedback?_sort=id&_order=desc")
        const data = await res.json()
        // we fetch data from our backend
        setFeedback(data)
        // once we have received data we set isLoading to false
        // which means we have load the data
        setIsLoading(false)
    }

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

    //  Set item to be updated
    // editFeedback is afunction just runs when we ckikc on the edit button
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }


    // Update Feedback Item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    }


    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback,
                isLoading
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
// once we have istalled json-server we need to add script to the json dependenci