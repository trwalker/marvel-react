jest.dontMock('../character-dashboard');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'

var CharacterDashboard = require('../character-dashboard');
var characterListStoreMock;
var characterListLoadActionMock;
var initialStateMock;

var characterDashboardComponent;

describe('CharacterDashboard Component', function() {

    beforeEach(function() {
        characterListStoreMock = {
            getCharacters: jest.genMockFunction(),
            addChangeListener: jest.genMockFunction(),
            removeChangeListener: jest.genMockFunction()
        };

        characterListLoadActionMock = {
            loadCharacters: jest.genMockFunction()
        };

        initialStateMock = {
            characters: [
                {id: 1, name: 'Spider Man', imageUri: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg'},
                {id: 2, name: 'Hulk', imageUri: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg'}
            ]
        };

        var characterDashboard = <CharacterDashboard characterListStore={characterListStoreMock} characterListLoadAction={characterListLoadActionMock} initialState={initialStateMock} />;

        characterDashboardComponent = ReactTestUtils.renderIntoDocument(characterDashboard);
    });

    describe('when valid state and inputs', function() {

        it('should render character dashboard', function() {
            var dashboardNode = ReactDOM.findDOMNode(characterDashboardComponent);

            expect(dashboardNode).toBeDefined();
        });

        it('should render two characters', function() {

        });

        it('should call store addChangeListener once', function() {
            expect(characterListStoreMock.addChangeListener.mock.calls.length).toBe(1);
        });

        it('should call action loadCharacters once', function() {
            expect(characterListLoadActionMock.loadCharacters.mock.calls.length).toBe(1);
        });

        it('should call store removeChangeListener once', function() {
            characterDashboardComponent.componentWillUnmount();

            expect(characterListStoreMock.removeChangeListener.mock.calls.length).toBe(1);
        });

    });
});
