import mitt from 'mitt'
const emitter = new mitt();
const Bus = {}

Bus.$on = emitter.on;
Bus.$off = emitter.off;
Bus.$emit = emitter.emit;

export default Bus