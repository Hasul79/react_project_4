import "./App.css";
import React, { useState } from "react";


function App()  {

  const [todos, settodos] = useState([]);
  const [value, setvalue] = useState("");
  const [editing, setediting] = useState(false);
  const [currentid, setcurrentid] = useState("");
  const [currentValue, setcurrentValue] = useState("");
  const [currentTodo, setcurrentTodo] = useState("");

  const onChange = (e) => {
    setvalue(e.target.value)
  };
//ավելացնում ենք onchange Handler-ը մուտքագրելու համար (onEditInputChange), որը պարզապես սահմանում է currentValue-ը օգտագործողի կողմից արժեքի տեսակի մեջ
   const onEditInputChange = (e) => {
    setcurrentValue(e.target.value);
   }

//set-ը ստանում է currentid-ը եւ currentValue-ը և անցնում է նշված onedittodo գործառույթին, որը անցնում է բոլոր խնդիրները, գտնում Է todo-ի տարր ID-ն եւ նորացնում է դրա արժեքը
   const onEditTodo = (id, newValue) => {
  todos.map(todo => {
    if(todo.id === id){
      todo.name = newValue;
    }
  })
 }

 //Այնուհետեւ մենք ավելացնում ենք onsubmit handler (onSubmitEditTodo) ' todo-ի տարրը ուղարկելու համար
  const onSubmitEditTodo = (e) => {
         e.preventDefault();
     onEditTodo(currentid, currentValue);
     setediting(false)
     
   };
   


 //ջնջում է բոլոր todos
  const onDeleteTask = () => {
    settodos([])
  };
//  ավելացնելով todo տարր, օբյեկտ պարունակող անունը եւ նույն ցուցադրել մինչեւ դրա հետագա պահպանման.
  const onAddTask = (e) => {
    e.preventDefault();


    const obj = {
      name: value,
      id: Date.now(),
    };
    if (value !== "") {
      settodos(todos.concat(obj));
      setvalue("")
    }
  };

const onToggleEdit = (todo) => {
  setediting(true)
  setcurrentValue(todo.name);
  setcurrentid(todo.id);
   setcurrentTodo(todo)
};


  // Հեռացնելու ֆունկցիա
  const onDelete = (itemId) => {
    settodos([...todos].filter(id => id.id !== itemId))
  }
  // console.log(todos)


  const mylist = todos.map((todo) => (
    <li className="todo_item">
      {todo.name}

      <button onClick={() => onToggleEdit(todo)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  ));

  return (
    <div className="wrapper">
      <button className="btn" onClick="./ClassComponent/ClassComponent">Function Component</button>
      <div className="App">
           
           {editing === false ? (
          <form onSubmit={onAddTask}>
            <input className="input"
              placeholder="type your task"
              value={value}
              onChange={onChange}
            />
            <button className="input" onClick={onAddTask}>Add Item</button>
            <button className="input" onClick={onDeleteTask}>Delete all</button>
          </form>
        ) : (
          <form onSubmit={onSubmitEditTodo}>
            <input className="input" 
              placeholder="edit your task"
              value={currentValue}
              name={currentTodo.name}
              onChange={onEditInputChange}
            />
            <button className="input"  type="submit">Edit Item</button>
          </form>
        )}
        <ul className="todo_wrapper">{mylist}</ul>
      </div>
    </div>
  );
}

export default App;