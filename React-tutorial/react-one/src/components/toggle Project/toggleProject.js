import React, { useState } from 'react';
import FaqData from './data';
import FAQ from './faq';

function ToggleProject() {
  const [faq, setFaq] = useState(FaqData);

  const showData = faq.map((item) => <FAQ key={item.id} {...item} />);

  return <section>{showData}</section>;
}

export default ToggleProject;
