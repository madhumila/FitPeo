// src/components/Feedback.js
import React from 'react';
import '../Styles/Feedback.css';

const feedbacks = [
  {
    name: 'Jenny Wilson',
    rating: 5,
    feedback: 'The food was excellent and so was the service.',
  },
  {
    name: 'Dianne Russell',
    rating: 4,
    feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia.',
  },
  // Add more feedbacks here
];

const Feedback = () => {
  return (
    <ul className="feedback-list">
      {feedbacks.map((feedback, index) => (
        <li key={index} className="feedback-item">
          <strong>{feedback.name}</strong>
          <div>{'★'.repeat(feedback.rating)}</div>
          <p>{feedback.feedback}</p>
        </li>
      ))}
    </ul>
  );
};

export default Feedback;
