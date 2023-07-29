import React from 'react';
import style from './country.module.css';

const Country = (props) => {
  const { name, flags, capital, population, area } = props.country;
  const { removeCountry } = props;

  const handleRemoveCountry = () => {
    removeCountry(name.common);
  };

  return (
    <article className={style.country}>
      <div>
        <img className={style.flag} src={flags.png} alt="" />
        <h2>Name : {name.common}</h2>
        <h2>Capital : {capital}</h2>
        <h3>Population : {population}</h3>
        <h2>Area : {area}</h2>
        <button className={style.btn} onClick={handleRemoveCountry}>
          Remove country
        </button>
      </div>
    </article>
  );
};

export default Country;
