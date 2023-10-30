import React from 'react';
import { createRoot } from 'react-dom/client';

import TodoListApp from './todo-list-app/components/app';
import SwapiApp from "./swapi/components/app";
import Hooks from "./hooks";

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

const hooksElement = document.getElementById('hooks');
if (hooksElement) {
    const root = createRoot(hooksElement);
    root.render(<Hooks />);
}
