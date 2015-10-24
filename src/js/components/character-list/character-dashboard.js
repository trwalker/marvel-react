var React = require('react');
var CharacterListStore = require('../../stores/character-list-store');
var CharacterListLoadAction = require('../../actions/character-list-load-action');

var CharacterDashboard = React.createClass({
    getInitialState: function() {
        return { characters: CharacterListStore.getCharacters() };
    },
    componentWillMount: function () {
        CharacterListStore.addChangeListener(this._onStateChange);
    },
    componentWillUnmount: function () {
        CharacterListStore.removeChangeListener(this._onStateChange);
    },
    componentDidMount: function() {
        CharacterListLoadAction.loadCharacters();
    },
    render: function() {
        return (
            <div className="row">
                {this.renderCharacterItems_()}
            </div>
        )
    },
    renderCharacterItems_: function() {
        var imgStyle = { width:'100%', height: '360px' };
        var characterItems = this.state.characters.map(function(character) {
            return (
                <div key={character.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <img src={character.imageUri} style={imgStyle} />
                    <div>{character.name}</div>
                </div>
            )
        });

        return characterItems;
    },
    _onStateChange: function () {
        this.setState({ characters: CharacterListStore.getCharacters() });
    }
});

module.exports = CharacterDashboard;
