import React from 'react';
import { Router, Route } from 'react-router';
import Template from './template';
import CharacterDashboard from './character-list/character-dashboard';
import CharacterDetails from './character/character-details';

class App extends React.Component {
    render() {
        return (
            <Template>
                <Router>
                    <Route path="/" component={CharacterDashboard} />
                    <Route path="/characters/:characterId" component={CharacterDetails} />
                </Router>
            </Template>
        );
    }
}

export default App;
