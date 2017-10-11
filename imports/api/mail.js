import { Meteor } from 'meteor/meteor';
import SparkPost from 'sparkpost';

Meteor.methods({
  'mail.send': (formData) => {
    // Honeypot check -- make sure this is not a bot
    if (formData.bestCoffeeRecipe.length > 0) {
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
    }).catch((err) => {
      throw new Meteor.Error('sparkpost-failure', err);
    });
  },
});