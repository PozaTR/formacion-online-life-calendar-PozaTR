import React from 'react';
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
              {days.map(day =>
                  <li className="dayList__day">
                    <div classname="day__information" onClick={() => showMessage(day)}>
                      <p className="day__date">{day.date}</p>
                    {day.feeling === 'happy' 
                    ? <span class="day__emoji" role="img" aria-label="smiling">&#128515;</span>
                    : <span class="day__emoji" role="img" aria-label="disappointed">&#128543;</span>
                    }
                    </div>
                  </li>
                )}
          </ul>
        : <div className="dayList__message">
            Rellena tu calendario de emojis
            <span class="dayList__message__emoji" role="img" aria-label="calendar">&#128198;</span>
          </div>
      }
      </div>
    </div>
  )
}

export default DayList;