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
      this.set('responseMessage', 'We got your message and we’ll get in touch soon');
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
