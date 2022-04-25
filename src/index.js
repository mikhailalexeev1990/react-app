import React from 'react';
import { createRoot } from 'react-dom/client';

import TodoListApp from './todo-list-app/components/app';

const todoListElement = document.getElementById('todo-list-app');
if (todoListElement) {
    const root = createRoot(todoListElement);
    root.render(<TodoListApp />);
}
