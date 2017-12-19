/* global requestAnimationFrame */

import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { partial } from 'lodash';

function Sending() {
  return (
    <div className="form__pending text--center flex-row flex-row__align-center">
      <h1>Sending...</h1>
    </div>);
}

function increment(speed, modulous, val) {
  const incremented = (val + speed) % modulous;
  if (incremented <= 0) {
    return modulous;
  }
  return incremented;
}

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.animate = this.animate.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
      bestCoffeeRecipe: '',
      sending: false,
      success: false,
      hue: 189,
    };
  }
  componentDidMount() {
    this.animate();
  }
  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  onSubmit(event) {
    event.preventDefault();
    this.setState({ sending: true });
    Meteor.call('mail.send', this.state, (err) => {
      if (err) {
        console.log('error', err);
      } else {
        this.setState({ success: true });
      }
    });
  }
  animate() {
    const incrementHue = partial(increment, 0.2, 360);
    const newHue = incrementHue(this.state.hue);
    this.setState({ hue: newHue });
    requestAnimationFrame(this.animate);
  }
  render() {
    const { name, email, message, bestCoffeeRecipe, sending, success } = this.state;
    if (success === true) {
      return (
        <div>
          <p className="form__group">
            Message received!! I&#8217;ll get back to you in a day or two.
          </p>
          <p className="form__group">
            <div style={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}><iframe src="https://giphy.com/embed/mgqefqwSbToPe" width="100%" height="100%" style={{ position: 'absolute' }} frameBorder="0" className="giphy-embed" allowFullScreen title="mail confirmation"/></div>
          </p>
        </div>
      );
    }
    return (
      <form onSubmit={this.onSubmit} className="form">
        <div className="text--med">
          <p className="form__group">
            My name is
            <input className="form__input form__input--inline" placeholder="" id="name" type="text" name="name" value={name} onChange={this.onChange} required="required" />
          </p>
          <p className="form__group">
            Something interesting I&rsquo;d like you to know is
            <textarea className="form__input form__textarea" placeholder="" id="message" name="message" onChange={this.onChange} value={message} />
          </p>
          <p className="form__group">
            Please write me back at
            <input className="form__input form__input--inline" placeholder="" id="email" type="email" name="email" value={email} onChange={this.onChange} required="required" />
          </p>
          {/* Honeypot: last name should NOT be filled in */}
          <input className="form__input form__input--honeypot" placeholder="Last Name" id="bestCoffeeRecipe" type="text" name="bestCoffeeRecipe" onChange={this.onChange} value={bestCoffeeRecipe} />
          <p className="form__group">
            <input style={{ backgroundColor: `hsl(${this.state.hue}, 100%, 40%)` }} className="form__button" type="Submit" value="Send" />
          </p>
        </div>
        { sending &&
          <Sending />
        }
      </form>
    );
  }
}

export default ContactForm;