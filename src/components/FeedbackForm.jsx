import React, { useState, useContext, useEffect } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, newItem, edit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [btnDisbaled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (edit === true) {
      setBtnDisabled(false);
      setText(newItem.text);
      setRating(newItem.rating);
    }
  }, [newItem, edit]);

  const handleText = (e) => {
    if (text === "") {
      // if text is nothing
      setBtnDisabled(true);
      //if there is nothing in the meesage, there is no point to show message
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Message must be over 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    // since it is a form submission we need to precent the form from normal behaviou
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (edit === true) {
        updateFeedback(newItem.id, newFeedback);
        setText("");
      } else {
        addFeedback(newFeedback);
        setText("");
      }
      //
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would you Rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleText}
            value={text}
            type="text"
            placeholder="Write a Review"
          />

          <Button isDisabled={btnDisbaled} type="submit">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
