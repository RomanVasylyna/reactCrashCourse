import React from 'react';
import Header from './components/Header';

const name = "Lisa";
const x = true;

function App() {
  return (
    <div className="container">
      {/* If we pass number/boolean we have to use {} for attributes*/}
     <Header />
    </div>
  );
}

export default App;
