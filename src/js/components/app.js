var React = require('react');
var Template = require('./template');
var CharacterDashboard = require('./character-list/character-dashboard');

var App = React.createClass({
   render: function() {
       return (
            <Template>
                <CharacterDashboard />
            </Template>
       );
   }
});

module.exports = App;
