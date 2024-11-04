//TodoMain.js
import TodoHeader from "./components/TodoHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from "react";
import styled from "styled-components";

export default function TodoMain() {
  const [inputValue, setInputValue] = useState();
  const [todoList, setTodoList] = useState([])
  const inputRef = useRef(null);

  const completedStyle = {
    fontStyle : 'italic', color: '#AAA',
    textDecoration: 'line-through',
  }

  const handleEnter = e => {
    if(e.key === 'Enter') handleAddItem()
  }
  const handleAddItem = () => {
    if(inputValue !== '') {
      setTodoList([
        ...todoList,
        {id: todoList.length + 1, item: inputValue, completed: false}
      ])
    }
    setInputValue('')
    inputRef.current.focus()
  }
  const handleRemoveItem = id => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }
  const handleCompleted = id => {
    setTodoList(todoList.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo))
  }
  return (
    <>
      <TodoHeader />
      <h2>입력폼</h2>
      <TodoAdd>
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onKeyDown={handleEnter}
          onChange={e => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAddItem}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </TodoAdd>

      <h2>할일 리스트</h2>
      <ul>
        {todoList.map(todo => (
          <TodoListLi key={todo.id} onClick={() => handleCompleted(todo.id)} style={todo.completed ? completedStyle : null}>
            <span>{todo.item}</span>
            <div className="icons">
              {!todo.completed && (
                <button>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              )}

              <button onClick={() => handleRemoveItem(todo.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </TodoListLi>
        ))}
      </ul>
    </>
  )
}

// Style
const TodoAdd = styled.div`
  background: #CCC;
  padding: 30px;
  & input {
    border: none;width: calc(100% - 30px)
  }
  & button {
    width: 30px;
  }
`

const TodoListLi = styled.li`
  display: flex;justify-content:space-between;
  padding: 20px 10px;margin: 0 30px;
  border-bottom: 1px solid #DDD;
  cursor: pointer;
  & .icons {
    display: flex;gap: 6px;
    font-size: 18px;
  }
`