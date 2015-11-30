import React from 'react';
import LoadingProgress from './../shared/loading-progress';
import CharacterListItem from './character-list-item';
import ReloadError from './../shared/reload-error';

class CharacterDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.characterListStore_ = props.characterListStore ? props.characterListStore : require('../../stores/character-list-store');
        this.characterListLoadAction_ = props.characterListLoadAction ? props.characterListLoadAction : require('../../actions/character-list-load-action');

        this.state = props.initialState ? props.initialState : { characters: null };
    }

    componentWillMount() {
        this.characterListStore_.addChangeListener(() => {
            this.onStateChange();
        });

        this.characterListLoadAction_.loadCharacters();
    }

    componentWillUnmount() {
        this.characterListStore_.removeChangeListener(() => {
            this.onStateChange();
        });
    }

    render() {
        return renderDashboard_(this);
    }

    reloadCharacters() {
        this.characterListLoadAction_.loadCharacters();
    }

    onStateChange() {
        var characters = this.characterListStore_.getCharacters();
        this.setState({ characters: characters });
    }
}

function renderDashboard_(instance) {
    var characters = instance.state.characters;

    if(!characters) {
        return renderLoadingView_();
    }
    else if(characters.length > 0) {
        return renderCharacters_(characters);
    }
    else {
        return renderErrorView_(instance);
    }
}

function renderLoadingView_() {
    return (
        <div id="dash-loading" className="row">
            <LoadingProgress title={'Calling All Super Heroes...'}
                             initialProgressValue={0}
                             getCurrentProgress={function(progress) { return ++progress; }} />
        </div>
    );
}

function renderCharacters_(characters) {
    var characterItems = characters.map(function(character) {
        return <CharacterListItem key={character.id} character={character} />
    });

    return (
        <div id="dash-characters" className="row">
            {characterItems}
        </div>
    );
}

function renderErrorView_(instance) {
    return (
        <div id="dash-reload" className="row">
            <ReloadError alertTitle={'Where are the Super Heroes?'}
                         reloadButtonText={'Assemble Heroes'}
                         reloadButtonOnClick={ function() { instance.reloadCharacters(); } } />
        </div>
    );
}

export default CharacterDashboard;
