import React, { useState } from 'react';
import ChildComponents from './child';

function ParentComponents() {
  const [childData, setChildData] = useState('');
  const [secondChildData, setSecondChildData] = useState('');
  const [fourthChildData, setFourthChildData] = useState('');

  const data = 'i am from parent';
  const parentDataTwo = 'I am second parent data';

  const secondData = (data) => {
    setChildData(data);
  };

  const thirdData = (data) => {
    setSecondChildData(data);
  };

  const fourthData = (data) => {
    setFourthChildData(data);
  };

  return (
    <div>
      <ChildComponents
        dataOne={data}
        secondData={secondData}
        thirdData={thirdData}
        fourthData={fourthData}
        parentDataTwo={parentDataTwo}
      />
      <h2>{childData}</h2>
      <h3>{secondChildData}</h3>
      <h4>{fourthChildData}</h4>
    </div>
  );
}

export default ParentComponents;
