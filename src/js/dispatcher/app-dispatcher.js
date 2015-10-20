var React = require('react');
var assign = require('react/lib/Object.assign');
var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action) {
        console.log('action', action);

        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;
