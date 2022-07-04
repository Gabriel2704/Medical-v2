import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/app.css';
import Login from './pages/login';
import Register from './pages/register';
import Doctor from './pages/doctor';
import Patient from './pages/patient';
import MedRec from './pages/medical_record';
import Records from './pages/records';
import Chart from './pages/chart';

function App() {
  return (
    <div>
     <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/doctor" exact component={Doctor} />
            <Route path="/patient" exact component={Patient} />
            <Route path="/medical_record" exact component={MedRec} />
            <Route path="/records" exact component={Records} />
            <Route path="/chart" exact component={Chart} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
