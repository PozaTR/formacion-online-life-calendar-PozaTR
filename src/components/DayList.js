import React from 'react';
import { Link } from 'react-router-dom';

const DayList = (props) => {
  return(
    <Link to='/form'>
      <div>
        <button type="button">+</button>
      </div>
    </Link>
  )
}

export default DayList;