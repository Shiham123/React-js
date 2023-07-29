import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Country from './country';
import style from './countries.module.css';

const Countries = (props) => {
  const { countryObject, removeCountry } = props;

  const countryElement = countryObject.map((country) => {
    const countryNew = { country, id: uuidv4() };
    return (
      <Country
        key={countryNew.id}
        {...countryNew}
        removeCountry={removeCountry}
      />
    );
  });

  return <div className={style.countries}>{countryElement}</div>;
};

export default Countries;
