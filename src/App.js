import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { FeedbackProvider } from './context/FeedbackContext'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'


function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
            <Link to={"/about"} color='white'>About Application</Link>
          </>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </FeedbackProvider>
  )
}

export default App