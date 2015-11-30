import React from 'react';

class LoadingProgress extends React.Component {
    constructor(props) {
        super(props);

        this.title_ = props.title ? props.title : 'Loading...';
        this.initialProgressValue_ = props.initialProgressValue ? props.initialProgressValue : 0;
        this.getCurrentProgress_ = props.getCurrentProgress ? props.getCurrentProgress : function(progress) { return ++progress; };
    }

    render() {
        var instance = this;

        return (
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="alert alert-info" role="alert">
                        {instance.title_}
                    </div>
                </div>
                <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
                    <div className="progress">
                        <div ref={ function(progressBar) { advanceProgressBar_(progressBar, 0, instance.initialProgressValue_, instance.getCurrentProgress_); } } className="progress-bar" role="progressbar" style={ { width:'0%' } }></div>
                    </div>
                </div>
            </div>
        );
    }
}

function advanceProgressBar_(progressBar, step, progress, getCurrentProgress) {
    if(progressBar) {
        var currentProgress = getCurrentProgress(progress);
        progressBar.style.width = currentProgress + '%';

        if (currentProgress < 99) {
            window.requestAnimationFrame(function (step) {
                advanceProgressBar_(progressBar, currentProgress, step, getCurrentProgress);
            });
        }
    }
}

export default LoadingProgress;
