import React, { useState } from 'react'
import '../CSS/Todo.css'
import { IoRemoveCircleOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))
        setEditable(false)
    }

    return (
        <div className='todo'>

            {editable ? <input className='input' type="text" value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div>{content}</div>}
            <div>
                <IoRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: '8px' }} />
                {editable ? <FaCheck onClick={handleUpdateTodo} className='icons' /> : <CiEdit className='icons' onClick={() => setEditable(true)} />}
            </div>
        </div>
    )
}

export default Todo