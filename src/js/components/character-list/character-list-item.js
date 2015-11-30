import React from 'react';

class CharacterListItem extends React.Component {
    constructor(props) {
        super(props);

        this.character_ = props.character;
    }

    render() {
        var imgStyle = { width:'100%', height: '360px' };

        return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <img src={this.character_.imageUri} style={imgStyle} />
                <div>{this.character_.name}</div>
            </div>
        );
    }
}

export default CharacterListItem;
