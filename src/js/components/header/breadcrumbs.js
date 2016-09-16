import React from 'react';

class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);

        this.items = props.items ? props.items : [ { name: 'home' }, { name: 'dashboard' }];
    }

    render() {
        var renderedItems = renderItems_(this.items);

        return (
            <ol className="breadcrumb">
                {renderedItems}
            </ol>
        );
    }
}

function renderItems_(items) {
    var lastItemIndex = items.length - 1;

    var renderedItems = items.map(function(item, index) {
        if(index === lastItemIndex) {
            return <li key={index} className="active">{item.name}</li>
        }
        else {
            return <li key={index}><a href="#">{item.name}</a></li>;
        }
    });

    return renderedItems;
}

export default Breadcrumbs;
