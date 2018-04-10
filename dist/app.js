(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
console.log('blog here');


let articleCardObject = {
    author: 'Jesie Oldenburg',
    title: '',
    content:'',
    heading:'',

}, 

articleCard = ` 
<div class="article-card-clean">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                        <div class="intro">
                            
                            <h2 class="text-center">${this.title}</h2> 

                            <p class="text-center"><span class="by">by</span> <a href="#">${this.author}</a>
                                <span class="date">Sept 8th, 2016 </span>
                            </p>
                        </div>
                            
                        <div class="article-image-container">
                            <img src="../img/grunt-logo.jpg" class="article-images">
                        </div>
                        
                        <div class="text">
                            <h3>What Is Grunt?</h3>
                            
                            <p>
                                
                            </p>
                            
                            <p>
                                
                            </p>
                            
                            <h3>What Is Scaffolding?</h3>
                            
                           
     
                        </div>
                    </div>
                </div>
            </div>
        </div>`;





module.exports = {

};
},{}],2:[function(require,module,exports){
"use strict";

let blog = require("./blog");

console.log('here boo boo');

var test = "this is some bullshit";

function testFunction (taco) {
    console.log("what is taco", taco);
}


testFunction(test);


},{"./blog":1}]},{},[2]);
