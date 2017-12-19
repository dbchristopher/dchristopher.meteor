import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import Header from './Header';
import AtAGlance from './AtAGlance';
import WorkHistory from './WorkHistory';

const ContentWrapper = styled.div`
  background: #ffffff;
  padding: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 5;
  margin-bottom: 50px;
  @media (min-width: 800px) {
    margin-top: -100px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.4);
  }
`;

function Index() {
  return (
    <div>
      <Header />
      <ContentWrapper>
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
        <div className="layout__section layout__section--bottom layout__section--gray">
          <div className="layout__wrapper layout__wrapper--narrow">
            <h2 className="layout__section-title">Say Hello!</h2>
            <ContactForm />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Index;