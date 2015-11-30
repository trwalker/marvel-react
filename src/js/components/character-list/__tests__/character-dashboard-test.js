jest.dontMock('../character-dashboard');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'

const CharacterDashboard = require('../character-dashboard');

var characterListStoreMock;
var characterListLoadActionMock;
var initialStateMock;

var characterDashboardComponent;

describe('CharacterDashboard Component', function() {

    function renderCharacterDashboard() {
        var characterDashboard = <CharacterDashboard characterListStore={characterListStoreMock}
                                                     characterListLoadAction={characterListLoadActionMock}
                                                     initialState={initialStateMock} />;

        characterDashboardComponent = ReactTestUtils.renderIntoDocument(characterDashboard);
    }

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

    });

    describe('render function', function() {

        describe('when invalid character data', function() {

            describe('when null state data', function() {

                beforeEach(function() {
                    initialStateMock = null;

                    renderCharacterDashboard();
                });

                it('should render loading content', function() {
                    var dashboardNode = ReactDOM.findDOMNode(characterDashboardComponent);

                    expect(dashboardNode.getAttribute('id')).toBe('dash-loading');
                });

            });

            describe('when undefined character data', function() {

                beforeEach(function() {
                    initialStateMock = {};

                    renderCharacterDashboard();
                });

                it('should render loading content', function() {
                    var dashboardNode = ReactDOM.findDOMNode(characterDashboardComponent);

                    expect(dashboardNode.getAttribute('id')).toBe('dash-loading');
                });

            });

            describe('when error loading character data', function() {

                beforeEach(function() {
                    initialStateMock = { characters: [] };

                    renderCharacterDashboard();
                });

                it('should render reload content', function() {
                    var dashboardNode = ReactDOM.findDOMNode(characterDashboardComponent);

                    expect(dashboardNode.getAttribute('id')).toBe('dash-reload');
                });

            });

        });

        describe('when valid state and inputs', function() {

            beforeEach(function () {
                renderCharacterDashboard();
            });

            it('should render two characters', function() {
                var dashboardNode = ReactDOM.findDOMNode(characterDashboardComponent);

                expect(dashboardNode.childNodes.length).toBe(2);
            });

            it('should call store addChangeListener once', function() {
                expect(characterListStoreMock.addChangeListener.mock.calls.length).toBe(1);
            });

            it('should call loadCharacters once', function() {
                expect(characterListLoadActionMock.loadCharacters.mock.calls.length).toBe(1);
            });

        });

    });

    describe('componentWillUnmount function', function() {

        describe('when valid state and inputs', function() {

            beforeEach(function () {
                renderCharacterDashboard();
            });

            it('should call store removeChangeListener once', function() {
                characterDashboardComponent.componentWillUnmount();

                expect(characterListStoreMock.removeChangeListener.mock.calls.length).toBe(1);
            });

        });

    });

    describe('reloadCharacters function', function() {

        describe('when valid state and inputs', function() {

            beforeEach(function () {
                renderCharacterDashboard();
            });

            it('should call loadCharacters again', function() {
                characterDashboardComponent.reloadCharacters();

                expect(characterListLoadActionMock.loadCharacters.mock.calls.length).toBe(2);
            });

        });

    });

    describe('onStateChange function', function() {

        describe('when valid state and inputs', function() {

            beforeEach(function () {
                renderCharacterDashboard();

                characterDashboardComponent.setState = jest.genMockFunction();

                characterDashboardComponent.onStateChange();
            });

            it('should call get characters once', function() {
                expect(characterListStoreMock.getCharacters.mock.calls.length).toBe(1);
            });

            it('should call set state once', function() {
                expect(characterDashboardComponent.setState.mock.calls.length).toBe(1);
            });
        });

    });
});
