console.log("typ js is here");

var Typed = require('typed.js');
// import Typed from 'typed';

var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 40
};

var typed = new Typed("#type", options);
