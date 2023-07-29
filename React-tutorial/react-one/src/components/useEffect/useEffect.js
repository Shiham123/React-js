import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

function UseEffect() {
  const [countPlus, setCountPlus] = useState(0);
  const [countMinus, setCountMinus] = useState(0);

  useEffect(() => {
    console.log('Use effect');
  }, [countPlus]);

  function handlePlusClick() {
    setCountPlus((countPlus) => countPlus + 1);
  }

  function handleMinusClick() {
    setCountMinus((countMinus) => countMinus - 1);
  }

  return (
    <section>
      {console.log('rendering')}
      <h1>Count : {countPlus}</h1>
      <h1>Count : {countMinus}</h1>
      <button onClick={handlePlusClick}>
        <FaPlus />
      </button>
      <button onClick={handleMinusClick}>
        <FaMinus />
      </button>
    </section>
  );
}

export default UseEffect;
