import React from 'react';
import { Link } from 'react-router-dom';
import happy from '../images/happy.jpg';
import sad from '../images/sad.jpg';
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
                    {day.feeling === 'happy' 
                    ? <div classname="day__information" onClick={showMessage}>
                        <p className="day__date">{day.date}</p>
                        <img className="day__emoji" src={happy} alt="happy"/>
                      </div>
                    : <div>
                        <p className="day__date">{day.date}</p>
                        <img className="day__emoji" src={sad} alt="sad"/>
                      </div>
                    }
                  </li>
                )}
          </ul>
        : <div className="dayList__message">
            'Rellena tu calendario de emojis'
          </div>
      }
      </div>
    </div>
  )
}

export default DayList;