import React, { useState } from 'react'
import '../CSS/TodoCreate.css';
import { useDispatch } from 'react-redux';
import type { TodoType } from '../types/Types';
import { createTodo } from '../redux/todoSlice';

function TodoCreate() {

    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Enter todo")
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo('');
    }

    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                className='todo-input' type="text" placeholder='Enter todo' />
            <button onClick={handleCreateTodo} className='todo-button'>Create</button>
        </div>
    )
}

export default TodoCreate