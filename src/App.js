import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Edition from './components/Edition';
import DayList from './components/DayList';
import './styles/components/app.scss';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      days: [],
      selectedDay: {}
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

  showMessage(event) {
    const selectedDay = event.currentTarget

    this.setState({
      selectedDay: selectedDay
    })
  }

  render() {
    const { feeling } = this.props;
    const { days } = this.state;
    const { onFeelingsSubmit, showMessage } = this;

    return(
      <Switch >
        <Route exact path="/" render={RouterProps => (
          <DayList match={RouterProps.match} days={days} showMessage={showMessage} />  
        )}>
        </Route>
        <Route path="/form" render={RouterProps => (
          <Edition match={RouterProps.match} onFeelingsSubmit={onFeelingsSubmit} feeling={feeling} />
        )}>
        </Route>
      </Switch>
    )
  }
}

export default App;
