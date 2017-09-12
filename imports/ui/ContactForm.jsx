import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
      lastName: ''
    }
  }
  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    const { name, email, message, lastName } = this.state;
    return (
      <form>
        <input placeholder="Name" id="name" type="text" name="name" value={name} onChange={this.onChange} required="required" />
        <input placeholder="Email" id="email" type="email" name="email" value={email} onChange={this.onChange} required="required" />
        <textarea placeholder="Message" id="message" name="message" onChange={this.onChange} value={message} />
        {/* Honeypot: last name should NOT be filled in */}
        <input placeholder="Last Name" id="lastName" type="text" name="lastName" onChange={this.onChange} value={lastName} />
        <input type="Submit" value="Say Hi" />
      </form>
    );
  }
}

export default ContactForm;