import React from 'react'
import '../CSS/Todo.css'
import { IoRemoveCircleOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6"; //<FaCheck />
import type { TodoType } from '../types/Types';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    return (
        <div className='todo'>
            <div>{content}</div>
            <div>
                <IoRemoveCircleOutline className='icons' style={{ marginRight: '8px' }} />
                <CiEdit className='icons' />
            </div>
        </div>
    )
}

export default Todo