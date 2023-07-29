import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function FAQ(props) {
  const { id, title, desc } = props;
  const [toggle, setToggle] = useState(false);

  const descShow = () => {
    return toggle && <p>{desc}</p>;
  };

  const toggleShow = () => {
    setToggle(!toggle);
  };

  return (
    <article>
      <div id={id}>
        <h4>{title}</h4>
        {descShow()}
        <button onClick={toggleShow}>
          {toggle ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
    </article>
  );
}

export default FAQ;
