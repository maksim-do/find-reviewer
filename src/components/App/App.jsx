import React, { useState } from 'react';
import Filter from '../Filter/Filter';
import Answer from '../Answer/Answer';

function App() {
  const [answer, setAnswer] = useState({ result: 'notQuery' });

  return (
    <div className="container">
      <div className="row">
        <Filter setAnswer={setAnswer} />
      </div>
      <div className="row">
        <Answer data={answer} />
      </div>
    </div>
  );
}

export default App;
