import React from 'react';
import Navigation from './header/navigation'
import Breadcrumbs from './header/breadcrumbs'

class Template extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Breadcrumbs />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Template;
