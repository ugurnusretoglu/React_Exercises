import React from 'react'
import '../App.css';

function TodoCreate() {
    return (
        <div className='todo-create'>
            <input className='todo-input' type="text" placeholder='Please enter todo' />
            <button className='todo-create-button'>Create todo</button>
        </div>
    )
}

export default TodoCreate