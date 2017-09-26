import { Meteor } from 'meteor/meteor';
import SparkPost from 'sparkpost';

Meteor.methods({
  'mail.send': (formData) => {
    // Make this is not a bot
    if (formData.lastName.length > 0) {
      throw new Meteor.Error('bot-detected');
    }
    const client = new SparkPost(Meteor.settings.private.SPARKPOST_API_KEY);
    client.transmissions.send({
      options: {
        sandbox: false,
      },
      content: {
        from: 'hi@mail.dchristopher.me',
        subject: 'New contact from dbchristopher.me',
        html: `<html><body><p><strong>From:</strong> ${formData.name} (${formData.email})</p><p><strong>Message:</strong> ${formData.message}</p></body></html>`,
      },
      recipients: [
        { address: 'dbchristopher@gmail.com' },
      ],
    }).then((data) => {
      console.log('Mail sent.');
      console.log(data);
    }).catch((err) => {
      console.log('Whoops! Something went wrong');
      console.log(err);
    });
  },
});