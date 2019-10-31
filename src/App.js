import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Edition from './components/Edition';
import DayList from './components/DayList';
import PopUp from './components/PopUp';
import './styles/components/app.scss';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      days: [],
      selectedDay: {},
      isPopupShown: false
    }

    this.getUses = this.getUser.bind(this);
    this.onFeelingsSubmit = this.onFeelingsSubmit.bind(this);
    this.showMessage = this.showMessage.bind(this);
    
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const ls = JSON.parse(localStorage.getItem('User'));
    if (ls !== null) {
      this.setState((prevState) => ({
        days : [...prevState.days, ...ls.days]
      }));
    };
  }

  onFeelingsSubmit(newInformation) {
    console.log(newInformation);
    this.setState((prevState => {
      const { days } = prevState

      days.push(newInformation);

      return {
        ...prevState,
        days: days
      }
    }),
    () => {
      localStorage.setItem('User', JSON.stringify(this.state));
    });
  }

  showMessage(day) {
    this.setState({
      selectedDay: day,
      isPopupShown: true
    })
    setTimeout(() => {
      this.setState({
        isPopupShown: false
      })
    }, 2000);
  }

  render() {
    const { feeling } = this.props;
    const { days, isPopupShown, selectedDay } = this.state;
    const { onFeelingsSubmit, showMessage } = this;

    return(
      <React.Fragment>
        <Switch >
          <Route exact path="/" render={RouterProps => (
            <DayList match={RouterProps.match} days={days} showMessage={showMessage}/>  
          )}>
          </Route>
          <Route path="/form" render={RouterProps => (
            <Edition match={RouterProps.match} onFeelingsSubmit={onFeelingsSubmit} feeling={feeling} />
          )}>
          </Route>
        </Switch>
       { isPopupShown ? <PopUp title={selectedDay.date} message={selectedDay.message}/> : '' }
      </React.Fragment>
    )
  }
}

export default App;
