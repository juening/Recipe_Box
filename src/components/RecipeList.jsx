var React = require('react');
var Recipe = require('./Recipe.jsx');

var RecipeList = React.createClass({

  // propTypes: {
  //   allRecipes: React.PropTypes.array.isRequired
  // },

  render: function(){
    var allRecipes = this.props.allRecipes;
    var recipes = allRecipes.map(function(recipe, index){
      return (
        <Recipe  key={index} id= {index} recipe={recipe} />
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
