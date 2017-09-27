import React from 'react';
import ContactForm from './ContactForm';
import Header from './Header';

function Index() {
  return (
    <div>
      <Header />
      <div className="layout__section">
        <div className="layout__wrapper layout__wrapper--narrow">
          <h1>At A Glance</h1>
          <ul>
            <li>Experienced in modern Javascript: ES6, and functional programming.</li>
            <li>Fluent in popular frameworks and libraries: React, Redux, Underscore/Lodash, CSS3/SCSS.</li>
            <li>Use of optimal CSS conventions to help scale large CSS codebases: BEM and OOCSS.</li>
            <li>Comfortable in full stack environments, including Ruby on Rails, PHP, and WordPress.</li>
            <li>Comfortable in Photoshop, Illustrator, and Sketch for designing and prototyping.</li>
            <li>Familiarity with statistics to make data-driven optimizations.</li>
            <li>Created a top rated <a href="http://labs.uxmonk.com/simon-says/" target="_blank">Google Chrome Experiment.</a></li>
          </ul>
        </div>
      </div>
      <div className="layout__section layout__section--bottom layout__section--gray">
        <div className="layout__wrapper layout__wrapper--narrow">
          <h1>Say Hello!</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Index;