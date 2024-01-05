/** @format */

const os = require("os");
const pasth = require('path');

const user = os.userInfo();
console.log(user);

const osifo = {
  name: os.freemem(),
  type: os.type(),
  release: os.release(),
};

console.log(osifo);



