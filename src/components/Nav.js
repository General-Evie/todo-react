import React, { useEffect, useRef, useState } from 'react'
import { CheckIcon } from './svgs/CheckSvg'
import TodoList from './TodoList';




function Nav() {
    const [isFocused, setIsFocused] = useState(false);
    const [todo, setTodo] = useState([]);
    const todoValueRef = useRef(null);

    // const localStorageKey = 'todoApp.todo' 

    const handleAddTodo = () => {
        const name = todoValueRef.current?.value || '';
        if (name!== '') {
            setTodo([...todo, name]);
            
            if (todoValueRef.current) {
                todoValueRef.current.value = '';
            }
        }
        console.log(name)
    }

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const inputText = isFocused ? 'Currently typing' : 'Create a new todo...';

    const inputClass = isFocused ? 'focused-input' : 'blurred-input';

    // useEffect(() => {
    //     const saved = JSON.parse(localStorage.getItem(localStorageKey) ?? '{}')
    //     if (saved) 
    //     setTodo(saved)
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem(localStorageKey, JSON.stringify(todo))
    // }, [todo])

    return (
        <div>
            <div className='input'>
                <div className='check-column'>
                    <div className='add-button' onClick={handleAddTodo}></div>
                    <div className='input-text'></div>
                </div>
                <input
                    type='text'
                    ref={todoValueRef}
                    className={`${inputClass} main-input`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={inputText} />
            </div>
            <div className='list'>
                <div className='todos'><TodoList todo={todo} /></div>
                <div className='nav'>
                    <div className='left'>items left </div>
                    <ul>
                        <li>All</li>
                        <li>Active</li>
                        <li>Completed</li>
                    </ul>
                    <div className='clear '>Clear Completed</div>
                </div>
            </div>
        </div>
    )
}

export default Nav