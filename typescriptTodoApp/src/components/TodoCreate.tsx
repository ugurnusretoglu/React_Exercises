import React from 'react'
import '../CSS/TodoCreate.css';

function TodoCreate() {
    return (
        <div className='todo-create'>
            <input className='todo-input' type="text" placeholder='Enter todo' />
            <button className='todo-button'>Create</button>
        </div>
    )
}

export default TodoCreate