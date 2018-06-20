import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
  Redirect
} from 'react-router-dom';
import {Provider} from 'mobx-react';
import * as stores from './stores/xjt1'
import './index.css';
import App from './App';
import Helloxjt1 from './pages/Helloxjt/Helloxjt1';
import Helloxjt2 from './pages/Helloxjt/Helloxjt2';
import Helloxjt3 from './pages/Helloxjt/hello3';
import Helloxjt4 from './pages/Helloxjt/hello4';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Router>
  <Provider {...stores}>
  <Switch>
    <Route exact path={'/'} component={App} />
    <Route exact path={'/xjt1'} component={Helloxjt1} />
    <Route exact path={'/xjt2'} component={Helloxjt2} />
    <Route exact path={'/xjt3'} component={Helloxjt3} />
    <Route exact path={'/xjt4'} component={Helloxjt4} />
  </Switch>
  </Provider>
</Router>, document.getElementById('root'));
registerServiceWorker();
