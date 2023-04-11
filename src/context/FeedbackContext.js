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
        const res = await fetch("/feedback?_sort=id&_order=desc")
        const data = await res.json()
        // we fetch data from our backend
        setFeedback(data)
        // once we have received data we set isLoading to false
        // which means we have load the data
        setIsLoading(false)
    }

    // Delete function
    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure that You want to delete this Feedback???")) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setFeedback(feedback.filter((item) => (
                item.id !== id
            )))
        }
    }
    // Add Feedback
    // since this is a promise we need to call asynx function 
    // and await to receive an apropriate function
    const addFeedback = async (newFeedback) => {
        const res = await fetch(`/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        // we dont need to add id manually since the way json server works is like other backends
        // it will create id automatically
        const data = await res.json();
        setFeedback([data, ...feedback])
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
    const updateFeedback = async (id, updItem) => {
        const res = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await res.json()
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item))
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
// we can add procy in order to avoid typing whole the url in the fetch URL
