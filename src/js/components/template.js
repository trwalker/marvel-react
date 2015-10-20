var React = require('react');
var Navigation = require('./header/navigation');

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

module.exports = Template;
