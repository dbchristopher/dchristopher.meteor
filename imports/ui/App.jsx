import React from 'react';
import { Route } from 'react-router-dom';
import Index from './Index';
import Contact from './Contact';

// App component - represents the whole app
function App() {
  return (
    <div className="container">
      <Route exact path="/" component={Index} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;