import { useReducer } from "react";
import { createContext } from "react";
import feedbackReducer from "../reducer/feedbackReducer";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

//we need to create a provider

export const FeedbackProvider = ({ children }) => {
  const initialState = {
    feedback: [
      { id: 1, text: "Feedback Item One from Context", rating: 10 },
      { id: 2, text: "Feedback Item Two from Context", rating: 9 },
      { id: 3, text: "Feedback Item three from Ciontext", rating: 8 },
    ],
    newItem: {},
    edit: false,
  };
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  //   Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure that your want to delete the feedback?")) {
      dispatch({ type: "DELETE_FEEDBACK", payload: id });
    }
  };

  //   Add Feedback
  //create addFeedback absed on its dependecies

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    dispatch({ type: "ADD_FEEDBACK", payload: newFeedback });
  };

  // Set item to be updated
  const editFeedback = (item) => {
    dispatch({ type: "EDIT_FEEDBACK", payload: item });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: state.feedback,
        newItem: state.newItem,
        edit: state.edit,
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
