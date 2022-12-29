import React, {useState} from "react";

function InputForm(props){
    const [text, setText]= useState("");

    function handleChange(event){
        const {value}=event.target;
        setText(value);
    }
    function handleClick(event){
        props.submit(text);
        event.preventDefault();
        setText("");
    }
    return (
        <form>
            <input onChange={handleChange} name="todo" placeholder="Add To Do Item..." value={text}/>
            <button onClick={handleClick}>Add</button>
        </form>
    );
}

export default InputForm;