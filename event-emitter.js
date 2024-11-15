const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

// listener-1
myEmitter.on("birthday", () => {
  console.log("Happy Birthday to You");
});

// listener-2
myEmitter.on("birthday", (gift) => {
  console.log(`I will send a ${gift}`);
});

myEmitter.emit("birthday", "watch");
