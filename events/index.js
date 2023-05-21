// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.event = {};
  }
  // Register an event handler
  on(eventName, callback) {
    return this.event[eventName] = this.event[eventName] ? [...this.event[eventName], callback] : [callback];
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    return this.event[eventName] ? this.event[eventName].map(event => event()) : null;
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    //can use both - top is preferable
    return delete this.event[eventName];

    return this.event[eventName] = [];
  }
}

module.exports = Events;