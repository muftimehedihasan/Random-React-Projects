// Counter.js
import React, { useState } from 'react';
// import { useState } from 'react'; // Only import useState

function Counter() {
  // Declare a state variable "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Count: {count}</h1>
      <button 
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button 
        className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-300 mt-2"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
