import React from 'react';

class CharacterDetails extends React.Component {
    constructor(props) {
        super(props);

        this.characterId_ = props.params.characterId;
    }

    render() {
        return <div>Details Here!!!! - Character: {this.characterId_}</div>
    }
}

export default CharacterDetails;
