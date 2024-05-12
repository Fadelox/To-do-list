import React, { useState } from 'react'

function TodoList() {
  const [task,setTask]=useState(["Fadel","Fadel","Fadel"])
  const [newtask,setNewtask]=useState()
  function handelinputchange(event){
    setNewtask(event.target.value)

  }
  function handeladdtask(){
    setTask(t=>[...t,newtask])
    setNewtask(" ")
  }
  function handeldelet(index){
    setTask(task.filter((t,l)=>l!==index))

  }
  function handelup(index){

  }
  return (
    <><div className='to-do-list'>
    <h1 className='title'>To-Do-List</h1>
    <input className='input' type='text' placeholder='Write some text' value={newtask} onChange={handelinputchange}/>
    <button className='add-button' onClick={handeladdtask}>Add</button>
     <ol>
         {task.map((e,index)=>(<li key={index}>
          <span className='text'>{e}</span> 
         <button className='delete-button' onClick={()=>handeldelet(index)}>Delet</button>
          <button className='move-button' onClick={()=>handelup(index)}>Up</button>
           <button className='move-button'>Down</button> 
           </li> ))}
     </ol>
     </div>
    </>
  )
}

export default TodoList