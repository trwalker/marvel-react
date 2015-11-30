import React from 'react';

class ReloadError extends React.Component {
    constructor(props) {
        super(props);

        this.alertTitle_ = props.alertTitle;
        this.reloadButtonText_ = props.reloadButtonText;
        this.reloadButtonOnClick_ = props.reloadButtonOnClick;
    }

    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="alert alert-danger" role="alert">{this.alertTitle_}</div>
                <button type="button" className="btn btn-primary" onClick={this.reloadButtonOnClick_}>{this.reloadButtonText_}</button>
            </div>
        );
    }
}

export default ReloadError;
