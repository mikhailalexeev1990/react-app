import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    render() {
        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;

            return (
                <button
                    type="button"
                    className={isActive ? 'btn btn-info' : 'btn btn-outline-second'}
                    key={name}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}
