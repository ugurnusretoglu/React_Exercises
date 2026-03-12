import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import '../App.css';

function Todo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey' }}>
            <div>
                First todo
            </div>
            <div>
                <CiCircleRemove className='todo-icons' />
                <MdEdit className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo