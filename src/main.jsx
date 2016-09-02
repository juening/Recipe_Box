var React = require('react');
var ReactDOM = require('react-dom');
var EventEmitter = require('./eventemitter');
var RecipeboxDispatcher = require('./dispatcher/RecipeDispatcher');

var Recipebox = require('./components/Recipebox.jsx')

ReactDOM.render(<Recipebox />, document.getElementById('box'));

// var recipeboxemitter = new EventEmitter();
//
// recipeboxemitter.on("STARTED_THE_APP", function(){
//   console.log("Started tha app");
// });
//
// recipeboxemitter.on("STARTED_THE_APP", function(){
//   console.log("Started tha app again");
// });
//
// recipeboxemitter.emit("STARTED_THE_APP");

// 
// RecipeboxDispatcher.register(function(act){
//   console.log("Received an action");
//   console.log(act);
// });
//act is an object
