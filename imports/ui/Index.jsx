import React from 'react';
import ContactForm from './ContactForm';
import Header from './Header';
import AtAGlance from './AtAGlance';
import WorkHistory from './WorkHistory';
import Divider from './Divider';

function Index() {
  return (
    <div>
      <Header />
      <Divider />
      <div className="layout__section">
        <div className="layout__wrapper layout__wrapper--narrow">
          <h2 className="layout__section-title">At A Glance</h2>
          <AtAGlance />
        </div>
      </div>
      <div className="layout__wrapper layout__wrapper--narrow">
        <h2 className="layout__section-title">Work History</h2>
        <WorkHistory />
      </div>
      <Divider />
      <div className="layout__section layout__section--bottom layout__section--gray">
        <div className="layout__wrapper layout__wrapper--narrow">
          <h2 className="layout__section-title">Say Hello!</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Index;