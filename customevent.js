var EventEmitter = require('events');

var customEvent = new EventEmitter();

var test = ()=>console.log('hi')

customEvent.on('test',test)
customEvent.emit('test')
//customEvent.removeListener('test',test)
customEvent.emit('test')

