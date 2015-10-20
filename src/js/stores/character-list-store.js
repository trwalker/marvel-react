var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');

const CHANGE_EVENT = 'character-list-change';

var _characters = [];

var CharacterListStore = assign(EventEmitter.prototype, {
    getCharacters: function() {
        return _characters;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;

        switch(action.actionType) {
            case AppConstants.actions.loadCharacters:
                _characters = payload.action.characters;
                break;
        }

        CharacterListStore.emitChange();

        return true;
    })
});

module.exports = CharacterListStore;
