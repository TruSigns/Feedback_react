import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedBack] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch fb date
  const fetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&&_desc"
    );
    const data = await response.json();
    setFeedBack(data);
    setIsLoading(false);
  };

  const addFeedback = async (newFeedBack) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedBack),
    });
    const data = await response.json();

    setFeedBack([data, ...feedback]);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Sure you want to delete?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = async (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, uItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uItem),
    });

    const data = await response.json();

    setFeedBack(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
