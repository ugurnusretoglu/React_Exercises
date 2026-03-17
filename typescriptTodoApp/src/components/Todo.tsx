import React from 'react'
import '../CSS/Todo.css'
import { IoRemoveCircleOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6"; //<FaCheck />
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    const dispatch = useDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }

    return (
        <div className='todo'>
            <div>{content}</div>
            <div>
                <IoRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: '8px' }} />
                <CiEdit className='icons' />
            </div>
        </div>
    )
}

export default Todo