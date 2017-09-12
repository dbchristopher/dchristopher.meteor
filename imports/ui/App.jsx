import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Contact from './Contact';

// App component - represents the whole app
function App() {
  return (
    <div className="container">
      <Route exact path="/" component={Header} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;