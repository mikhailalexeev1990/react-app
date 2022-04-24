import React from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header/index';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {
    const todoData = [
        {label: 'first', important: false, id: 1},
        {label: 'second', important: true, id: 2},
        {label: 'third', important: false, id: 3},
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;
