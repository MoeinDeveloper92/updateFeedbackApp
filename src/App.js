import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import dataFeedback from './data/dataFeedback'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

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

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
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