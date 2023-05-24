import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Board from './Board/Board';
import Profiles from './Profiles/Profiles';
import HistorySample from './HistorySample'

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>홈</Link></li>
        <li><Link to='/about'>소개</Link></li>
        <li><Link to='/profiles'>프로필</Link></li>
        <li><Link to='/board'>게시판</Link></li>
        <li><Link to='/history'>기록</Link></li>
      </ul>
      
      <hr></hr>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/profiles" component={Profiles} exact />
        <Route path="/board" component={Board} exact />
        <Route path="/history" component={HistorySample} exact />
      </Switch>
    </div>
  );
};

export default App;
