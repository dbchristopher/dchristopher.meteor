import React, { Component } from 'react';
import Header from './Header';

// App component - represents the whole app
export default class App extends Component {
 render() {
   return (
     <div className="container">
       <Header />
       <p>This is more content here!</p>
       <p>This is more content here!</p>
     </div>
   );
 }
}