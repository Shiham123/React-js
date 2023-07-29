import React from 'react';

function ChildComponents(props) {
  const { dataOne, parentDataTwo, secondData, thirdData, fourthData } = props;

  const dataTwo = 'I am from child';
  const dataThree = 'I am second child data';
  const dataFour = 'I am fourth child data';

  secondData(dataTwo);
  thirdData(dataThree);
  fourthData(dataFour);

  return (
    <div>
      <h1>{dataOne}</h1>
      <h1>{parentDataTwo}</h1>
    </div>
  );
}

export default ChildComponents;
