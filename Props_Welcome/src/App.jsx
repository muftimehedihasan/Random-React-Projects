import React from 'react';
import Welcome from './Welcome';

function App() {
  const userName = "Alice";  // প্রপ হিসেবে পাঠানোর জন্য ডাটা

  return (
    <div>
      <h1>Props Example</h1>
      {/* Welcome component-এ userName প্রপ হিসেবে পাঠানো হচ্ছে */}
      <Welcome name={userName} />
    </div>
  );
}

export default App;
