import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


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
    };
  }
  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  onSubmit(event) {
    event.preventDefault();
    Meteor.call('mail.send', this.state, (err) => {
      if (err) {
        console.log('error', err);
      } else {
        console.log('it worked');
      }
    });
  }
  render() {
    const { name, email, message, lastName } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input className="form__input" placeholder="Name" id="name" type="text" name="name" value={name} onChange={this.onChange} required="required" />
        <input className="form__input" placeholder="Email" id="email" type="email" name="email" value={email} onChange={this.onChange} required="required" />
        <textarea className="form__input form__textarea" placeholder="Message" id="message" name="message" onChange={this.onChange} value={message} />
        {/* Honeypot: last name should NOT be filled in */}
        <input className="form__input form__input--honeypot" placeholder="Last Name" id="lastName" type="text" name="lastName" onChange={this.onChange} value={lastName} />
        <input type="Submit" value="Say Hi" />
      </form>
    );
  }
}

export default ContactForm;