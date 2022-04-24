import React from 'react';
import { createRoot } from 'react-dom/client';

import TodoListApp from './components/todo-list-app/app'

const todoListElement = document.getElementById('todo-list-app');
if (todoListElement) {
    const root = createRoot(todoListElement);
    root.render(<TodoListApp />);
}
