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

PopUp.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default PopUp;