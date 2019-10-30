import React from 'react';
import { Link } from 'react-router-dom';
import happy from '../images/happy.jpg';
import sad from '../images/sad.jpg';

const DayList = (props) => {
  const { days } = props;
  // const { feeling, message, date } = days;
  return(
    <div>
      <Link to='/form'>
        <button type="button">+</button>
      </Link>
      <div>
        {days.length 
        ? <ul className="list">
              {days.map(day =>
                  <li className="day">
                    {day.feeling === 'happy' 
                    ? <div classname="day__information">
                        <p className="day__date">{day.date}</p>
                        <img className="day__emoji" src={happy} alt="happy"/>
                        <p className="day__message">{day.message}</p>
                      </div>
                    : <div>
                        <p className="day__date">{day.date}</p>
                        <img className="day__emoji" src={sad} alt="sad"/>
                      </div>
                    }
                  </li>
                )}
          </ul>
        : <div>
            'Rellena tu calendario de emojis'
          </div>
      }
      </div>
    </div>
  )
}

export default DayList;