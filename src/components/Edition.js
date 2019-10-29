import React from 'react';
import { Link } from 'react-router-dom';

const Edition = (props) => {
  return(
    <React.Fragment>
      <form className="form">
        <div className="date">
          <label className="date__label" htmlFor="date">Fecha</label>
          <input 
            className="date__input"
            type="date"
            id="date"
            name="date"
            min="2019-01-01"
            max="2019-31-12"
            step="1"/>
        </div>
        <p className="state">Estado</p>
        <div className="state__container">
          <div>
            <label className="state__happy__label" htmlFor="happy">
              <input
                classname="state__happy__input"
                id="happy"
                type="radio"
                value=""
                name="state"
              />
              :)
            </label>
          </div>
          <div>
            <label classname="state__sad__label" htmlFor="sad">
              <input
                classname="state__sad__input"
                id="sad"
                type="radio"
                value=""
                name="state"
              />
              :(
            </label>
          </div>
        </div>
        <div className="message">
          <label className="message__label" htmlFor="message">Mensaje</label>
            <input 
              classname="message__input"
              type="text"
              id="message"
              name="message"
              />
        </div>
      </form>
      <Link classname="edition__link" to='/detail/:dayList'>
        <button classname="save__button" type="button">Guardar</button>
        <button className="cancel__button" type="button">Cancelar</button>
      </Link>
    </React.Fragment>
  );
}

export default Edition;