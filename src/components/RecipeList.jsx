var React = require('react');
var Recipe = require('./Recipe.jsx');
//var RecipeboxDispatcher = require("../dispatcher/RecipeDispatcher");

var RecipeList = React.createClass({

  render: function(){
    console.log("Recipelist ", this.props);
    var allRecipes = this.props.allRecipes;
    var onEdit = this.props.onEdit;
    var onDelete = this.props.onDelete;
    var recipes = allRecipes.map(function(recipe, index){
      return (
        <Recipe  key={index} id= {index} recipe={recipe} onEdit={onEdit} onDelete={onDelete} />
      );
    });
    return (
      <div className="panel-group">
        { recipes }
      </div>
    )
  }
});

module.exports = RecipeList;
