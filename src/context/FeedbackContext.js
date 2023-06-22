import { useReducer } from "react";
import { createContext, useState } from "react";
import feedbackReducer from "../reducer/feedbackReducer";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

//we need to create a provider

export const FeedbackProvider = ({ children }) => {
  const initialState = {
    feedback: [{ id: 1, text: "Feedback Item One from Context", rating: 10 }],
  };
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  //   Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure that your want to delete the feedback?")) {
      dispatch({ type: "DELETE_FEEDBACK", payload: id });
    }
  };

  //   Add Feedback

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //states are immutable,we cannot make a push to it, we need to make a copu of it.
    dispatch({ type: "ADD_FEEDBACK", payload: newFeedback });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: state.feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
