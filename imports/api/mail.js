import { Meteor } from 'meteor/meteor';
import SparkPost from 'sparkpost';
import sparkpostApiKey from '../_settings-sparkpost';

Meteor.methods({
  'mail.send': (formData) => {
    // Make this is not a bot
    if (formData.lastName.length > 0) {
      throw new Meteor.Error('bot-detected');
    }
    const client = new SparkPost(sparkpostApiKey);
    client.transmissions.send({
      options: {
        sandbox: true,
      },
      content: {
        from: 'testing@sparkpostbox.com',
        subject: 'Hello, World!',
        html: '<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>',
      },
      recipients: [
        { address: 'dbchristopher@gmail.com' },
      ],
    }).then((data) => {
      console.log('Woohoo! You just sent your first mailing!');
      console.log(data);
    }).catch((err) => {
      console.log('Whoops! Something went wrong');
      console.log(err);
    });
  },
});