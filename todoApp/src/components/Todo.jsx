import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import '../App.css';

function Todo({ todo, onRemoveTodo }) {
    const { id, content } = todo;

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', marginTop: '10px', marginTop: '10px' }}>
            <div>
                {content}
            </div>
            <div>
                <CiCircleRemove className='todo-icons' onClick={removeTodo} />
                <MdEdit className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo