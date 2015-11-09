import React from 'react';

class CharacterDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.characterListStore_ = props.characterListStore ? props.characterListStore : require('../../stores/character-list-store');
        this.characterListLoadAction_ = props.characterListLoadAction ? props.characterListLoadAction : require('../../actions/character-list-load-action');

        this.state = props.initialState ? props.initialState : { characters: [] };
    }

    componentWillMount() {
        this.characterListStore_.addChangeListener(() => {
            this.onStateChange_(this);
        });

        this.characterListLoadAction_.loadCharacters();
    }

    componentWillUnmount() {
        this.characterListStore_.removeChangeListener(() => {
            this.onStateChange_(this);
        });
    }

    render() {
        return (
            <div className="row">
                { this.renderCharacterItems_() }
            </div>
        )
    }

    renderCharacterItems_() {
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
    }

    onStateChange_(instance) {
        var characters = instance.characterListStore_.getCharacters();
        this.setState({ characters: characters });
    }
}

export default CharacterDashboard;
