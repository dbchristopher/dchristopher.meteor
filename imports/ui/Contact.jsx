import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import NavBar from './NavBar';

function Index() {
  return (
    <div className="container">
      <NavBar>
        <div className="layout__wrapper">
          <Link to="/" className="link--bare text--white">&#8592; Back To Main</Link>
        </div>
      </NavBar>
      <div className="layout__wrapper layout__wrapper--narrow content">
        <h1 className="page-title">Hi.</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Index;