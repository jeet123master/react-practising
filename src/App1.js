import React, { useState } from 'react';
import './App.css';
import Text from './components/Text';


function App() {
  const [showText, setShowText] = useState(false);
  
  return (
    <div className="App">
        <button
          onClick={() => setShowText(!showText)}
        >
          Show/Hide Show Text
        </button>
        <br /><br />
        {showText && <Text/> }
    </div>
  );
}

export default App;
