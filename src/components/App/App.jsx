import React from 'react';
import Filter from '../Filter/Filter';
import Answer from '../Answer/Answer';

function App() {
  return (
    <div className="container">
      <div className="row">
        <Filter />
      </div>
      <div className="row">
        <Answer />
      </div>
    </div>

  );
}

export default App;

/*

      <div className="row">
        <Answer />
      </div>
*/
