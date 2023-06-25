import { useReducer } from "react";
import { CorsRequest } from "cors";
import { createContext } from "react";
import feedbackReducer from "../reducer/feedbackReducer";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
const FeedbackContext = createContext();

//we need to create a provider

export const FeedbackProvider = ({ children }) => {
  const initialState = {
    feedback: [],
    newItem: {},
    edit: false,
  };
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const res = await fetch(
      "https://localhost:4000/feedback?_sort=id&_order=desc",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  };
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

  //   Update feedback Item
  const updateFeedback = (id, updItem) => {
    dispatch({ type: "UPDATE_FEEDBACK", payload: { id, updItem } });
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
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
