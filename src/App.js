import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import dataFeedback from './data/dataFeedback'


function App() {
  const [feedback, setFeedback] = useState(dataFeedback)
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>

    </>

  )
}

export default App