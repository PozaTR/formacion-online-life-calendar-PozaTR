import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Edition from './components/Edition';
import DayList from './components/DayList';
import './styles/components/app.scss';

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return(
      <Switch >
        <Route exact path="/" render={RouterProps => (  
          <Edition match={RouterProps.match}/>
        )}>
        </Route>
        <Route path="/detail/:dayList" render={RouterProps => (
          <DayList match={RouterProps.match}/>
        )}>
        </Route>
      </Switch>
    )
  }
}

export default App;
