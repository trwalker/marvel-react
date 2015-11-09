import React from 'react';

var Template = require('./template');
var CharacterDashboard = require('./character-list/character-dashboard');

class App extends React.Component {
    render() {
        return (
            <Template>
                <CharacterDashboard />
            </Template>
        );
    }
}

export default App;
