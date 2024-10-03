import React, { useReducer } from 'react';
import generateMathExercise from '../utils/mathUtils';

const exercise = generateMathExercise();

// Initial state
const initialState = {
    currentQuestionIndex: 1,
    currentQuestion: `${exercise.question}`,
    userAnswer: '',
    correctAnswer: `${exercise.answer}`,
    feedback: '',
    score: 0,
}

// Reducer function for state management
const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_ANSWER':
            return { ...state, userAnswer: action.payload };
        case 'SUBMIT_ANSWER':
            if (parseInt(state.userAnswer, 10) === parseInt(state.correctAnswer, 10)) {
                const newExercise = generateMathExercise()
                return {
                    ...state,
                    currentQuestion: newExercise.question,
                    correctAnswer: newExercise.answer,
                    currentQuestionIndex: state.currentQuestionIndex++,
                    userAnswer: '',
                    feedback: 'Correct!',
                    score: state.score++,
                }
            } else {
                return {
                    ...state,
                    feedback: 'Incorrect! Try again.',
                }
            }
        case 'RESET':
            return {...state, userAnswer: '', feedback: ''};
        default:
            return state;
    }
}

// MathExercise component: a card displaying the task and inputs
const MathExercise = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange = (e) => {
        dispatch({type: 'SET_ANSWER', payload: e.target.value});
    }

    const handleSubmit = () => {
        dispatch({type: 'SUBMIT_ANSWER'})
    }

    const handleReset = () => {
        dispatch({type: 'RESET'})
    }

    return (
        <div className='question-container'>
            <h2>Math Question: {state.currentQuestionIndex}</h2>
            <h3>{ state.currentQuestion }</h3>
            <input
            type='text'
            onChange={handleInputChange}
            value={state.userAnswer}
            placeholder='Answer...'
            />
            <p>Answer: {state.correctAnswer}</p>
            <p>Score: {state.score}</p>
            <p>Feedback: {state.feedback}</p>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default MathExercise;