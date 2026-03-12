import React from 'react'
import '../App.css';
import { useState } from 'react';

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 9999999),
            content: newTodo
        }

        onCreateTodo(request)
        clearInput();
    }

    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className='todo-input' type="text" placeholder='Please enter todo' />
            <button onClick={createTodo} className='todo-create-button'>Create todo</button>
        </div>
    )
}

export default TodoCreate