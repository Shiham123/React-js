import React, { useState } from 'react';

function ToggleReact() {
  const [toggle, setToggle] = useState(true);

  const toggleVisibility = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle && (
        <p>this is toggle paragraph, using react inside useState method</p>
      )}
      <div>
        <button onClick={toggleVisibility}>{toggle ? 'Hide' : 'Show'}</button>
      </div>
    </>
  );
}

export default ToggleReact;
