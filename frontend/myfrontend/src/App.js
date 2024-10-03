import React from 'react';
import MathExercise from './components/MathExercise';
// import axios from 'axios';

// // State data for backend communication
// const [data, setData] = useState(null);

// // useEffect for fetching data
// useEffect(() => {
//   axios.get('http://127.0.0.1:8000/api/my-endpoint/')
//   .then(response => setData(response.data.message))
//   .catch(error => console.error('Error fetching data:', error));
// }, []);

function App() {
  return (
    <>
      <h1>Equation Quest</h1>
      <MathExercise />
    </>
  );
}

export default App;
