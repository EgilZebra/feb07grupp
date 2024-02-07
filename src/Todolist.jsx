import { useState } from "react"

const firstTodos = [
    { task: 'Göra frukost', id: 1}, 
    { task: 'Bädda sängen', id: 2}, 
    { task: 'Duscha', id: 3}
]

const newStyle = {
    backgroundColor: 'peru',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'centre',
    alignItems: 'centre',
    gap: '1rem',
    padding: '1rem',
    listStyle: 'none',
    color: 'olive'
}

const buttonStyle = {
    backgroundColor: 'magenta',
    color: 'orangered'
}


const AddTodos = () => {

    const [todos, setTodos] = useState(firstTodos);

    const [inputValue, setInputValue] = useState('');


    const addTask = () => {
        const newIdone = Math.max(...todos.map((todo) => todo.id), 0) + 1;
        console.log(newIdone);

        const newTask = {task: inputValue, id: newIdone};
        console.log(newTask)
        setTodos((prevTask) => [...prevTask, newTask]);
    }

    const removeTodo = (id) => {    
        setTodos((prevValue) => prevValue.filter((todo) => todo.id !== id));
        setInputCount(prevCount => prevCount - 1)
    }

    const displayTodos = todos.map((todo) => (
        <section style={newStyle} key={todo.id}>
            <li>{todo.task}</li>
            <button style={buttonStyle} onClick={() => removeTodo(todo.id)}>Remove!</button>
        </section>
    ))

    return (
        <>
        <label>
            Task!
            <input placeholder="new task" id="task" type="text" onChange={(e) => setInputValue(e.target.value)} />
        </label>
        
        <button onClick={addTask}>add task</button>
        <ul>
            {displayTodos}
        </ul>
        </>
    )
}

export default AddTodos