import React, { useEffect, useState } from 'react';
import axios from 'axios';

// // State data for backend communication
// const [data, setData] = useState(null);

// // useEffect for fetching data
// useEffect(() => {
//   axios.get('http://127.0.0.1:8000/api/my-endpoint/')
//   .then(response => setData(response.data.message))
//   .catch(error => console.error('Error fetching data:', error));
// }, []);

// Set of math questions --> outsource to backend with db and/or algorithm to generate questions
const mathQuestions = [
  { question: "2 + 2", answer: 4 },
  { question: "8 + 7", answer: 15 },
  { question: "2 * 20", answer: 40 },
  { question: "6 * 8", answer: 48 },
]

function App() {
  // State to track current question, the user answer, and the feedback
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

// Input change handler
const handleInputChange = (e) => {
  setUserAnswer(e.target.value);
}

// Handle answer submission
const handleSubmit = () => {
  const correctAnswer = mathQuestions[currentQuestionIndex].answer;
  if (parseInt(userAnswer, 10) === correctAnswer) {
    setFeedback('Correct!');
    setUserAnswer('');
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % mathQuestions.length);
  } else {
    setFeedback('Incorrect! Try again.');
  }
}

// Function to reset input field
const resetInput = () => {
  setUserAnswer('');
  setFeedback('');
}


  return (
    <>
      <h1>Equation Quest</h1>
      <div className='question-container'>
        {/* TODO: Create Question Component */}
        <h2>Math Question:</h2>
        <h3>{ mathQuestions[currentQuestionIndex].question }</h3>
        <input
          type='text'
          value={userAnswer}
          onChange={handleInputChange}
          placeholder='Answer...'
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={resetInput}>Reset</button>
        {feedback && <p>{feedback}</p>}
      </div>
    </>
  );
}

export default App;
