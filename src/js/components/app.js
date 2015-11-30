import React from 'react';
import Template from './template';
import CharacterDashboard from './character-list/character-dashboard';

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
