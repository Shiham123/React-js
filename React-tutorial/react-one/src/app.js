import React from 'react';
import Counter from './components/memo/counter';

function App() {
  /*
  let items = [];
  items = Data.map((item, index) => {
    return (
      <Card
        key={index}
        title={item.title}
        description={item.description}
        index={item.heading}
      />
    );
  });
  */

  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
