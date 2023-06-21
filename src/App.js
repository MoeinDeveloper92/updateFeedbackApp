import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import data from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [feedback, setFeedback] = useState(data);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure that your want to delete the feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //states are immutable,we cannot make a push to it, we need to make a copu of it.
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
export default App;
