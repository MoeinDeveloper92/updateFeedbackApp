import React, { useState } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisbaled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);

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

  return (
    <Card>
      <form>
        <h2>How Would you Rate your service with us?</h2>
        {/* @tidi - rating select component */}
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
