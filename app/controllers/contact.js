import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  message: '',

  isValidEmailAddress: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 7),
  isValid: Ember.computed.and('isValidEmailAddress', 'isValidMessage'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    sendMessage() {

      const email = this.get('emailAddress');
      const message = this.get('message');

      const newContact = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContact.save().then((response) => {
        this.set('responseMessage', 'We got your message and we’ll get in touch soon');
        this.set('emailAddress', '');
        this.set('message', '');
      });

    }
  }
});
