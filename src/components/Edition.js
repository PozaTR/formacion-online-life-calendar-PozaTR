import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/edition.scss';

class Edition extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '01/01/2019',
      feeling: 'happy',
      message: ''
    }

    this.onChangeInfo = this.onChangeInfo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

    onChangeInfo(event) {
      const newInfo = event.currentTarget.value;
      const infoKey = event.currentTarget.name;
      console.log(event.currentTarget)
      
      this.setState({
        [infoKey]: newInfo
      })
    }

    onSubmit() {
      const { onFeelingsSubmit } = this.props;
      const { date, feeling, message } = this.state;

      onFeelingsSubmit({
        date: date,
        feeling: feeling,
        message: (feeling === 'happy') ? message : ''
      });
    }
  
    render() {
      const { onChangeInfo, onSubmit } = this;
      const { feeling, message, date } = this.state

      return(
        <div className="edition">
          <form className="form">
            <div className="date">
              <label className="date__label" htmlFor="date">fecha</label>
              <input 
                className="date__input"
                type="date"
                id="date"
                name="date"
                min="01-01-2019"
                max="31-12-2019"
                step="1"
                value={date}
                onChange={onChangeInfo}
                />
            </div>
            <div className="state__container">
              <p className="state">estado</p>
              <div className="state__feelings">
                <div className="state__feeling">
                  <label className="state__label" htmlFor="happy">
                    :)
                  </label>
                  <input
                    className="state__input"
                    id="happy"
                    type="radio"
                    value="happy"
                    name="feeling"
                    defaultChecked
                    onChange={onChangeInfo}
                  />
                </div>
                <div>
                  <label className="state__label" htmlFor="sad">
                    :(
                  </label>
                  <input
                    className="state__input"
                    id="sad"
                    type="radio"
                    value="sad"
                    name="feeling"
                    onChange={onChangeInfo}
                  />
                </div>
              </div>
            </div>
           { feeling === 'happy'
            ? <div className="message">
                <label className="message__label" htmlFor="message"></label>
                <input 
                  className="message__input"
                  type="text"
                  id="message"
                  name="message"
                  placeholder="¿Por qué es un buen día?"
                  onChange={onChangeInfo}
                  value={message}
                  />
            </div>
            : 'OHHH :( siento que hayas tenido un mal día'}
          </form>
          <Link className="edition__link" to='/'>
            <button className="save__button" type="button" onClick={onSubmit}>Guardar</button>
            <button className="cancel__button" type="button">Cancelar</button>
          </Link>
        </div>
      );
    }
}

export default Edition;