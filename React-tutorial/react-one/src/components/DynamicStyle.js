import React, { useState, useEffect } from 'react';
import './dynamic.css';

function DynamicStyle() {
  const [name, setName] = useState('');
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    if (name.length < 3) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [name]);

  const handleInput = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        className={`${inputValid ? 'valid' : 'invalid'}`}
        type="text"
        placeholder="Dynamic style"
        value={name}
        onChange={handleInput}
      />
    </div>
  );
}

export default DynamicStyle;
