var React = require('react');

var RecipeAddBox = React.createClass({
  render: function(){
    return (
      <div>
        <textarea id="addRecipe" className="col-sm-6">
        </textarea>
        &nbsp;
        <input type="button" className="btn btn-primary" value="Add Recipe" />
      </div>
    )
  }
});

module.exports = RecipeAddBox;
