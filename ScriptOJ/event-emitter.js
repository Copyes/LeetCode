class EventEmitter {
  constructor() {
    this.events = {}
  }
  on(event, handle) {
    const callbacks = this.events[event] || []
    callbacks.push(handle)
    this.events[event] = callbacks
  }
  emit(event, ...args) {
    const callbacks = this.events[event]
    if (callbacks.length > 0) {
      callbacks.forEach(cb => {
        cb(...args)
      })
    }
  }
  off(event, handle) {
    const callbacks = this.events[event]
    let index = callbacks.indexOf(handle)
    index > -1 && callbacks.splice(index, 1)
  }
}

const emitter = new EventEmitter()
const sayHi = name => console.log(`Hello ${name}`)
const sayHi2 = name => console.log(`Good night, ${name}`)

emitter.on('hi', sayHi)
emitter.on('hi', sayHi2)
emitter.emit('hi', 'ScriptOJ')
// => Hello ScriptOJ
// => Good night, ScriptOJ

emitter.off('hi', sayHi)
emitter.emit('hi', 'ScriptOJ')
// => Good night, ScriptOJ

const emitter2 = new EventEmitter()
emitter2.on('hi', (name, age) => {
  console.log(`I am ${name}, and I am ${age} years old`)
})
emitter2.emit('hi', 'Jerry', 12)
// => I am Jerry, and I am 12 years old
