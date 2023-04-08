import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import dataFeedback from './data/dataFeedback'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [feedback, setFeedback] = useState(dataFeedback)

  // delete Feedback Function
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
    <>
      <Header />
      <div className='container'>
        <FeedbackForm
          handleAdd={addFeedback}
        />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>

    </>

  )
}

export default App