import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/dayList.scss';

const DayList = (props) => {
  const { days, showMessage } = props;

  return(
    <div className="dayList">
      <Link className="dayList__linK" to='/form'>
        <button className="back__button" type="button">+</button>
      </Link>
      <div className="dayList__calendar">
        {days.length 
        ? <ul className="dayList__list">
              {days.map((day, index) =>
                  <li key={`day-${index}`} className="dayList__day">
                    <div className="day__information" onClick={() => showMessage(day)}>
                      <p className="day__date">{day.date}</p>
                    {day.feeling === 'happy' 
                    ? <span className="day__emoji" role="img" aria-label="smiling">&#128515;</span>
                    : <span className="day__emoji" role="img" aria-label="disappointed">&#128543;</span>
                    }
                    </div>
                  </li>
                )}
          </ul>
        : <div className="dayList__message">
            Rellena tu calendario de emojis
            <span className="dayList__message__emoji" role="img" aria-label="calendar">&#128198;</span>
          </div>
      }
      </div>
    </div>
  )
}

DayList.propTypes = {
  days: PropTypes.arrayOf(PropTypes.object).isRequired,
  showMessage: PropTypes.func.isRequired
}

export default DayList;