import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Details from './pages/Details';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <main>
          <BrowserRouter>
            <Link to="/">Back to Home</Link>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/details/:id" render={ (props) => <Details { ...props } />  } />
              <Route path="/register/:id" render={ (props) => <Register { ...props } />  }  />
              <Route component={ NotFound } />
            </Switch>
          </BrowserRouter>
      </main>
    </>
  );
}

export default App;
