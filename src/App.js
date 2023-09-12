import React from "react";
import Header from "./components/Header";
import { useState } from "react";
import feedBackData from "./data/FeedBackData";
import FeedBackDataList from "./components/FeedBackDataList";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";

import AboutPage from "./pages/AboutPage.Jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLinkIcon from "./components/AboutIconLinkIcon";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedBack] = useState(feedBackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackDataList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLinkIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
