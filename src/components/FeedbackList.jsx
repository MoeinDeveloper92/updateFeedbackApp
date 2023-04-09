import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import { motion, AnimatePresence } from 'framer-motion'


function FeedbackList() {
    // as bellow we bring data from Context
    const { feedback } = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet...</p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            item={item}
                            key={item.id}
                          
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}



export default FeedbackList