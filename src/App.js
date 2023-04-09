import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import dataFeedback from './data/dataFeedback'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4 } from 'uuid'
import About from './pages/About'

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
        <Routes>
          <Route path='/' element={<>
            <FeedbackForm
              handleAdd={addFeedback}
            />
            <FeedbackStats feedback={feedback} />
            <FeedbackList
              feedback={feedback}
              handleDelete={deleteFeedback}
            />
            <Link to={"/about"} color='white'>About Application</Link>
          </>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>



    </>

  )
}

export default App