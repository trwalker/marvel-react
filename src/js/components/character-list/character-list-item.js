import React from 'react';
import { Link } from 'react-router'

class CharacterListItem extends React.Component {
    constructor(props) {
        super(props);

        this.character_ = props.character;
    }

    render() {
        var imgStyle = { width:'100%', height: '260px' };

        return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="well">
                    <h4 className="text-capitalize">{this.character_.name}</h4>
                    <p>
                        <Link to={`/characters/${this.character_.id}`}>
                            <img src={this.character_.image} style={imgStyle} />
                        </Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default CharacterListItem;
