import './App.css';
import React, {useState} from "react";
import InputForm from "./InputForm";
import ToDoItem from './ToDoItem';

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  function addToDoItem(anItem){
    setToDoItems(prevValue => {
      return [...prevValue, anItem];
    })
  }

  return (
    <div>
      <h1>To Do list</h1>
      <InputForm submit={addToDoItem}/>
      {toDoItems.map((item, index) => {
        return <ToDoItem key={index} id={index} text={item} />
      })}
    </div>
  );
}

export default App;
