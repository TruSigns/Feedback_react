import { createContext, useState } from "react";
import uuid from "react-uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState([
    {
      id: 1,
      text: "this is a test",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedBack) => {
    newFeedBack.id = uuid();
    setFeedBack([newFeedBack, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Sure you want to delete?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, uItem) => {
    setFeedBack(
      feedback.map((item) => (item.id === id ? { ...item, ...uItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        feedbackEdit,
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
