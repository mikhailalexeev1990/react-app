import React, {Component} from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";

import './app.css';

export default class TodoListApp extends Component {

    maxId = 1;

    createTodoItem = (label) => {
        return {
            label,
            done: false,
            important: false,
            id: this.maxId++,
        }
    }

    state = {
        todoData: [
            this.createTodoItem('first'),
            this.createTodoItem('second'),
            this.createTodoItem('third'),
            this.createTodoItem('fourth'),
        ],
        searchText: '',
        filter: 'all',
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.filter((el) => el.id !== id)
            };
        });
    };

    addItem = (label) => {
        const newItem = this.createTodoItem(label);

        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, newItem]
            }
        });
    }

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1),
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    }

    search = (items, searchText) => {
        if (searchText.length === 0) {
            return items;
        }

        return items.filter((el) => el.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
    }

    onSearchChange = (searchText) => {
        this.setState({searchText})
    }

    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((el) => !el.done);
            case 'done':
                return items.filter((el) => el.done);
            default:
                return items;
        }
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    render() {
        const {todoData, searchText, filter} = this.state;
        const visibleItems = this.filter(this.search(todoData, searchText), filter);
        const countDone = todoData.filter((el) => el.done).length;
        const countTodoData = todoData.length - countDone;
        const countImportant = todoData.filter((el) => el.important).length;

        return (
            <div className="todo-app">
                <AppHeader toDo={countTodoData} done={countDone}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}
                    />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm
                    onItemAdded={this.addItem}
                />
            </div>
        );
    }
}
