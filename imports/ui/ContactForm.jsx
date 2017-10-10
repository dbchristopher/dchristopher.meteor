import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

function Sending() {
  return (
    <div className="form__pending text--center flex-row flex-row__align-center">
      <h1>Sending...</h1>
    </div>);
}

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
      bestCoffeeRecipe: '',
      sending: false,
      success: false,
    };
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
            <input className="form__input form__input--inline" placeholder="Charles Pamplemousse, III" id="name" type="text" name="name" value={name} onChange={this.onChange} required="required" />
          </p>
          <p className="form__group">
            My most embarassing secret is
            <textarea className="form__input form__textarea" placeholder="I like to drink peanut butter in my coffee." id="message" name="message" onChange={this.onChange} value={message} />
          </p>
          <p className="form__group">
            Please write me back at
            <input className="form__input form__input--inline" placeholder="charly.pamps@email.com" id="email" type="email" name="email" value={email} onChange={this.onChange} required="required" />
          </p>
          {/* Honeypot: last name should NOT be filled in */}
          <input className="form__input form__input--honeypot" placeholder="Last Name" id="bestCoffeeRecipe" type="text" name="bestCoffeeRecipe" onChange={this.onChange} value={bestCoffeeRecipe} />
          <p className="form__group">
            <input className="form__button" type="Submit" value="Send" />
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