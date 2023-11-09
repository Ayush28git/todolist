import React from 'react';


const Todolist = (props) => {
  return (
    <div className='container item_todo'>
      <button onClick={()=>{
        props.deleteFunc(props.id);
      }} className='my_btn delete_btn'><i className="fa-solid fa-xmark"></i></button>
      <li>{props.element}</li>
    </div>
  );
}

export default Todolist;

