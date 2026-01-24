import React, { useState } from "react";
import { FlaskConical, Send, Zap } from "lucide-react";
import "./Styles/Labs.css";

const Labs = () => {
  const [feedback, setFeedback] = useState({ name: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFeedback({ name: "", msg: "" });
  };

  return (
    <div className="labs-container">
      {/* HEADER */}
      <div className="labs-header">
        <FlaskConical size={40} className="labs-icon" />
        <h2 className="labs-title">Feedback Terminal</h2>
        <p className="labs-subtitle">
          Transmit your thoughts to the central node.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleFeedback} className="labs-form">
        <div className="labs-grid">
          <input
            type="text"
            placeholder="ENTITY NAME"
            value={feedback.name}
            onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
            className="labs-input"
            required
          />

          <div className="labs-encryption">Encryption: Active</div>
        </div>

        <textarea
          placeholder="TRANSMIT MESSAGE..."
          rows="4"
          value={feedback.msg}
          onChange={(e) => setFeedback({ ...feedback, msg: e.target.value })}
          className="labs-textarea"
          required
        ></textarea>

        <button type="submit" className="labs-button">
          {submitted ? (
            <>
              <Zap className="pulse" /> <span>Transmitted</span>
            </>
          ) : (
            <>
              <Send size={16} /> <span>Send Feedback</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Labs;
