import React from 'react';
import Todo from '../models/todo';

const TOdosContext = React.createContext<{
    items: Todo[],
    addTodo: () => void,
    removeTodo: (id: string) => void
}>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});