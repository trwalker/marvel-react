var characterListLoadAction = require('../character-list-load-action');
var requestMock;
var dispatcherMock;
var constantsMock;

describe('CharacterListLoad Action', function() {

    beforeEach(function() {
        requestMock = {
            getCharacters: jest.genMockFunction(),
            addChangeListener: jest.genMockFunction(),
            removeChangeListener: jest.genMockFunction()
        };

        dispatcherMock = {
            loadCharacters: jest.genMockFunction()
        };

        constantsMock = {
            characters: [
                {id: 1, name: 'Spider Man', imageUri: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg'},
                {id: 2, name: 'Hulk', imageUri: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg'}
            ]
        };

        characterListLoadAction.request_ = requestMock;
        characterListLoadAction.dispatcher_ = dispatcherMock;
        characterListLoadAction.constants_ = constantsMock;
    });

    describe('when valid state and inputs', function() {

        it('should render two characters', function() {

        });

        it('should call store addChangeListener once', function() {
            //expect(dispatcherMock.loadCharacters.mock.calls.length).toBe(1);
        });

    });
});
