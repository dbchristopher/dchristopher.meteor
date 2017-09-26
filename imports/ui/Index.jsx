import React from 'react';
import ContactForm from './ContactForm';
import Header from './Header';

function Index() {
  return (
    <div>
      <Header />
      <div className="layout__wrapper layout__wrapper--narrow content">
        <h1>Say Hello!</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Index;