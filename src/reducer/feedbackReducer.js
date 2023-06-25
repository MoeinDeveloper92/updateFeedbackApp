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
        newItem: action.payload,
        edit: true,
      };
    case "UPDATE_FEEDBACK":
      return {
        ...state,
        feedback: state.feedback.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload.updItem };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default feedbackReducer;
