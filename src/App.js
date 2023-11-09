import './App.css';
import { useState } from 'react';
import Todolist from './Components/Todolist';


function App() {
  const [TodoItems,setTodoitems] =  useState("");
  const [TodoList,setTodolist] = useState([]);
  

  const handleChange = (e)=>{
          setTodoitems(e.target.value);
  }
  const handleClick = ()=>{
      setTodolist([...TodoList,TodoItems]);
      setTodoitems("");
  }
  const handleDelete=(id)=>{
    
     setTodolist((TodoList)=>{
      return TodoList.filter((element,index)=>{
           return id !== index;
      })
     })
     }
  

  return (
    
    <div className="App main_todo">
      <div className='container todo_Container'>
        <div className='head_todo'>
          <div className='heading_todo'>
        <h2>TO-DO LIST</h2>
        </div>
      <div className='input_todo'>
        <input type="text" className='input_block' placeholder='Enter to add' value ={TodoItems} onChange={handleChange}/>
        <button className='my_btn' onClick={handleClick}>+</button>
      </div>
      </div>
      <div className='container list_container'>
        <ul>
         {TodoList.map((element,index)=>{
                  return <Todolist key = {index}  element = {element} deleteFunc = {handleDelete} id={index}/>
         })}
          
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
