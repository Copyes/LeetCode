class EventEmit {
  constructor() {
    this.events = {}
  }

  on(event, handle) {
    let callbacks = this.events[event] || []; 
    callbacks.push(handle);
    this.events[event] = callbacks;
  }
  emit(event, ...args) {
    let callbacks = this.events[event] || [];
    if(callbacks.length > 0) {
      callbacks.forEach((cb) => {
        cb(...args);
      })
    }
  }
  off(event, handle) {
    let index = this.events.indexOf(event);
    this.events
  }
}