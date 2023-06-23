import React from 'react';
import { Icon } from 'react-icons-kit';
import { edit2 } from 'react-icons-kit/feather/edit2';
import { trash } from 'react-icons-kit/feather/trash';
import { useDispatch, useSelector } from 'react-redux';
import { handleCheckbox, removeTodo } from '../actions/action';

export const Todos = ({handleEditClick, editFormVisibility}) => {
    // dispatch function to dispatch an action
    const dispatch = useDispatch();
  
    // getting todos from the store
    const todos = useSelector((state)=>state.operationsReducer);
    return todos.map((todo)=>(
      <div key={todo.id} className='todo-box'>
          <div className='content'>
              {editFormVisibility===false&&(
                <input 
                  className='checkBx'
                  type="checkbox" 
                  checked={todo.completed}
                  onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
              )}
              <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                  {todo.todo}
              </p>
          </div>
          <div className='actions-box'>
                {editFormVisibility===false&&(
                  <>
                    <span onClick={()=>handleEditClick(todo)}><Icon icon={edit2}/></span>
                    <span onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={trash}/></span>
                  </>
                )}
          </div>
      </div>
    ))
  }
  