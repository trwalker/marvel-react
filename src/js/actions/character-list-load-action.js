

class CharacterListLoadAction {
    constructor() {
        this.request_ = require('superagent');
        this.dispatcher_ = require('../dispatcher/app-dispatcher');
        this.constants_ = require('../constants/app-constants');
    }

    loadCharacters() {
        loadCharactersFromApi_(this.request_, this.dispatcher_, this.constants_, function(dispatcher, constants, characters) {
            dispatcher.handleViewAction({
                actionType: constants.actions.loadCharacters,
                characters: characters
            });
        });
    }
}

function loadCharactersFromApi_(request, dispatcher, constants, callback) {
    request
        .get('http://localhost:9000/v1/characters')
        .end(function(err, res) {
            if(err || res.statusCode !== 200) {
                callback(dispatcher, constants, []);
            }
            else {
                callback(dispatcher, constants, res.body.characters);
            }
        });
}

var characterListLoadAction = new CharacterListLoadAction();

module.exports = characterListLoadAction;
