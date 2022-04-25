import React from 'react';
import { createRoot } from 'react-dom/client';

import TodoListApp from './todo-list-app/components/app';
import SwapiApp from "./swapi/components/app";

const todoListElement = document.getElementById('todo-list-app');
if (todoListElement) {
    const root = createRoot(todoListElement);
    root.render(<TodoListApp />);
}

const swapiElement = document.getElementById('swapi');
if (swapiElement) {
    const root = createRoot(swapiElement);
    root.render(<SwapiApp />);
}
