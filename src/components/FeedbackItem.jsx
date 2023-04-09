import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from '../shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={() => deleteFeedback(item.id)}>
                <FaTimes color='purple' />
            </button>
            {/* bellow When I click on the edit icon, I want the item to goes into an empty object in the gloval context */}
            <button className='edit' onClick={() => editFeedback(item)}>
                <FaEdit color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object
}
export default FeedbackItem