import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const Handleadd = () => {

    setTodos([...todos, { id:uuidv4(),todo, isDone: false }])

    setTodo("")
  }

  const Handlechange = (e) => {
    setTodo(e.target.value)
   
  }

  const change =(e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos=[...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos)
  }
  
  const Delete = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = todos.filter(item=>{
      return item.id!== id;
    })
     setTodos(newTodos)
  }
  

  


  return (
    <div>
      <div className='md:my-5 main'>
        <div className="container bg-violet-800 md:h-8 md:mx-auto w-screen  md:w-1/2 font-serif font-bold text-center text-white  "><h1 className=''>Task-Management</h1> </div>
        <div className="bg-violet-600 md:mx-auto w-screen md:w-1/2 font-serif  min-h-screen md:min-h-[80vh] font-bold text-center text-black flex flex-col items-center ">
          <div className='add p-5 m-5'>
            <input onChange={Handlechange} value={todo} className='w-50 md:w-80 p-1 rounded-lg ' placeholder='Add Task Here'></input>
            <button onClick={Handleadd} className='bg-blue-800 rounded-lg p-2 text-white  m-3'>Submit</button>
          </div>


          <div className='todos '>
            {todos.map(item => {
              return <div key={item.id} className='flex w-[90vw] md:w-[40vw] md:h-14 bg-violet-400 p-2 rounded-xl m-4 justify-between items-center'>
                <div className='flex '>
                  <input name={item.id} onChange={change} type='checkbox' value={item.isDone} className='m-2' ></input>
                  <h2 className={item.isDone ? 'line-through' : ''}>{item.todo}</h2>
                </div>
                <div className='btn'>
                
                  <button  name={item.id} onClick={Delete} className='bg-blue-800 rounded-lg p-2 text-white'>Delete</button>
                </div>
              </div>
            })}
          </div>

        </div>

      </div>
    </div>
  )
}
export default App
