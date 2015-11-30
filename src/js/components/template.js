import React from 'react';
import Navigation from './header/navigation'

class Template extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Template;
