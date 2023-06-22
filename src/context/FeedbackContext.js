import { useReducer, useCallback } from "react";
import { createContext, useState } from "react";
import feedbackReducer from "../reducer/feedbackReducer";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

//we need to create a provider

export const FeedbackProvider = ({ children }) => {
  const initialState = {
    feedback: [{ id: 1, text: "Feedback Item One from Context", rating: 10 }],
    feedbackEdit: {
      // we want to update this piecde of state when we click on it.
      item: {},
      edit: false,
    },
  };
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  //   Delete Feedback
  const deleteFeedback = useCallback(
    (id) => {
      if (
        window.confirm("Are you sure that your want to delete the feedback?")
      ) {
        dispatch({ type: "DELETE_FEEDBACK", payload: id });
      }
    },
    [dispatch]
  );

  //   Add Feedback
  //create addFeedback absed on its dependecies

  const addFeedback = useCallback(
    (newFeedback) => {
      newFeedback.id = uuidv4();
      dispatch({ type: "ADD_FEEDBACK", payload: newFeedback });
    },
    [dispatch]
  );

  // Set item to be updated
  const editFeedback = useCallback(
    (item) => {
      dispatch({ type: "EDIT_FEEDBACK", payload: item });
    },
    [dispatch]
  );

  return (
    <FeedbackContext.Provider
      value={{
        feedback: state.feedback,
        singleFeedback: state.singleFeedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
