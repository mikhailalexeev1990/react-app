import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

        let classItem = 'todo-list-item';
        let classExclamation = 'btn btn-outline-success btn-sm float-end';

        if (done) {
            classItem += ' done';
        }

        if (important) {
            classItem += ' important';
            classExclamation += ' active';
        }

        return (
            <span className={classItem}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}
                >
                    {label}
                </span>

                <button type="button" className={classExclamation}
                        onClick={onToggleImportant}
                >
                    <i className="fas fa-exclamation"></i>
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-end"
                        onClick={onDeleted}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </span>
        );
    }
}
