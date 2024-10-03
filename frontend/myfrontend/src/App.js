import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // State data for backend communication
  const [data, setData] = useState(null);

  // useEffect for fetching data
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/my-endpoint/')
    .then(response => setData(response.data.message))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1>React + Django Project:</h1>
      <p>{data ? data : "Loading..."}</p>
    </>
  );
}

export default App;
