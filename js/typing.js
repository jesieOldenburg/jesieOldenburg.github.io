// var Typed = require('./typed.js');
console.log('what is typed?', Typed);

var options = {
  // strings: ["I'm Jesie & I design user experiences", "I'm Jesie & I design user interfaces", "I'm Jesie & I develop front-end code"],
  strings: [ " I create meaningful user experiences", " I design intuitive user interfaces", " I develop modular front-end code", " I build responsive websites and web-apps", " I utilize modern tech like Reactjs"],
  stringsElement: null,
  typeSpeed: 60,
  smartBackspace: true,
  loop: true,
  backDelay: 2500,
}

var typed = new Typed(".typed-element", options);
