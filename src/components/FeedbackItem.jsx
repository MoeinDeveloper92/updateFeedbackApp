import React, { useState } from "react";
import Card from "../shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.prototype = {
  item: PropTypes.object,
};

//instead of the card div we can create a card component which wrap othe divs

export default FeedbackItem;
