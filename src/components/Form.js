import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../actions/action';


export const Form =({editFormVisibility, editTodo, cancelUpdate})=>{
    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = useState('')
    const [editValue, setEditValue] = useState('')

    useEffect(() => {
        setEditValue(editTodo.todo);
    },[editTodo])

    const handleSubmit =(e)=>{
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj = {
            id:time,
            todo:todoValue,
            completed:false
        }
        setTodoValue('');
        dispatch(addTodo(todoObj));
    }

    const editSubmit = (e)=>{
        let editedObj={
            id: editTodo.id,
            todo: editValue,
            completed: false
          }
          dispatch(handleEditSubmit(editedObj))
    }

    return (
        <>
          {editFormVisibility===false?(
            <form className='form-group custom-form' onSubmit={handleSubmit}>
                <label className='title'>Add your todo-items</label>
                <div className='inpBtn'>
                  <div className='input-and-btn'>
                    <input 
                      type="text" 
                      className='form-control' 
                      placeholder="Enter Your Task" 
                      name="name" 
                      id='name' 
                      value={todoValue} 
                      onChange={(e)=>setTodoValue(e.target.value)}
                      required
                      />
                  </div>
                  <button type="submit" className='addBtn'>ADD</button>
                </div>
            </form>
          ):(
            <form className='form-group custom-form' onSubmit={editSubmit}>
              <label>Update your todo-items</label>
              <div className='input-and-btn'>
                  <input type="text" className='form-control' required
                  value={editValue||""} onChange={(e)=>setEditValue(e.target.value)}/>
                  <button type="submit" className='btn btn-secondary btn-md'>UPDATE</button>
              </div>
              <button type="button" className='btn btn-primary btn-md back-btn'
              onClick={cancelUpdate}>BACK</button>
            </form>
          )}
        </>
      )
}