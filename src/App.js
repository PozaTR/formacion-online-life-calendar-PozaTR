import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Edition from './components/Edition';
import DayList from './components/DayList';
import './styles/components/app.scss';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      days: []
    }

    this.onFeelingsSubmit = this.onFeelingsSubmit.bind(this);
    
  }

  onFeelingsSubmit(newInformation) {
    console.log(newInformation);
    this.setState(prevState => {
      const { days } = prevState

      days.push(newInformation);

      return {
        ...prevState,
        days: days
      }
    })
  }

  render() {
    const { feeling } = this.props;

    return(
      <Switch >
        <Route exact path="/" render={RouterProps => (
          <DayList match={RouterProps.match}/>  
        )}>
        </Route>
        <Route path="/form" render={RouterProps => (
          <Edition match={RouterProps.match} onFeelingsSubmit={this.onFeelingsSubmit} feeling={feeling} />
        )}>
        </Route>
      </Switch>
    )
  }
}

export default App;
