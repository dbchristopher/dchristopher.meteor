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
      lastName: '',
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
    const { name, email, message, lastName, sending, success } = this.state;
    if (success === true) {
      return (
        <div>
          <p className="form__group">
            Message received!! I&#8217;ll get back to you in a day or two.
          </p>
          <p className="form__group">
            <iframe src="https://giphy.com/embed/mgqefqwSbToPe" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen title="giphy embed" />
          </p>
        </div>
      );
    }
    return (
      <form onSubmit={this.onSubmit} className="form">
        <div className="text--large">
          <p className="form__group">
            My name is
            <input className="form__input form__input--inline" placeholder="Aloysius Snuffleupagus, III" id="name" type="text" name="name" value={name} onChange={this.onChange} required="required" />.
          </p>
          <p className="form__group">
            I&#8217;m writing to tell you that
            <textarea className="form__input form__textarea" placeholder="everything is going to be ok." id="message" name="message" onChange={this.onChange} value={message} />
          </p>
          <p className="form__group">
            If that sounds interesting, please write me back at
            <input className="form__input form__input--inline" placeholder="ally.snuffs@email.com" id="email" type="email" name="email" value={email} onChange={this.onChange} required="required" />.
          </p>
          {/* Honeypot: last name should NOT be filled in */}
          <input className="form__input form__input--honeypot" placeholder="Last Name" id="lastName" type="text" name="lastName" onChange={this.onChange} value={lastName} />
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