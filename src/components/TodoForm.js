import React, {useState} from 'react'

function TodoForm(props) {

const [input, setInput] = useState('');

const handleChange = e => {
    setInput(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 9999),
        text: input
    });

    setInput('');
};

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="New one" 
            value={input} 
            name="text" 
            className="todo-input"
            onChange={handleChange} />
            <button className="todo-button">Add new one</button>
        </form>
    )
}

export default TodoForm 