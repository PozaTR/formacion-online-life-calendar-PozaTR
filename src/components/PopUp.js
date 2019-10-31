import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/popUp.scss';

const PopUp = (props) => {
  const { title, message } = props;

  return(
    <div className="popup">
      <p className="popup__title">{title}</p>
      { message ? <p className="popup__message">{message}</p> : '' }
    </div>
  )
}

export default PopUp;