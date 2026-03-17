import React from 'react'
import '../CSS/Todo.css'
import { IoRemoveCircleOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6"; //<FaCheck />

function Todo() {
    return (
        <div className='todo'>
            <div>First todo</div>
            <div>
                <IoRemoveCircleOutline className='icons' style={{ marginRight: '8px' }} />
                <CiEdit className='icons' />
            </div>
        </div>
    )
}

export default Todo