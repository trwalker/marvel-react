var React = require('react');

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Marvel Superheroes</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/">Dashboard</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

module.exports = Navigation;
