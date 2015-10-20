
function CharacterListLoadAction() {
    this.request = require('superagent');
    this.dispatcher = require('../dispatcher/app-dispatcher');
    this.constants = require('../constants/app-constants');
}

function loadCharacters() {
    loadCharactersFromApi_(this.request, this.dispatcher, this.constants, function(dispatcher, constants, characters) {
        dispatcher.handleViewAction({
            actionType: constants.actions.loadCharacters,
            characters: characters
        });
    });
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

CharacterListLoadAction.prototype = {
    loadCharacters: loadCharacters
};

var characterListLoadAction = new CharacterListLoadAction();

module.exports = characterListLoadAction;
