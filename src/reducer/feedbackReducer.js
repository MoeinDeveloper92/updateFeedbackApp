const feedbackReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_FEEDBACK":
      return {
        ...state,
        feedback: state.feedback.filter((item) => item.id !== action.payload),
      };
    case "ADD_FEEDBACK":
      return {
        ...state,
        feedback: [action.payload, ...state.feedback],
      };
    case "EDIT_FEEDBACK":
      return {
        ...state,
        item: action.payload,
        edit: true,
      };
    default:
      return state;
  }
};

export default feedbackReducer;
