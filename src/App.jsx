import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([
    "初期タスク1",
    "初期タスク2"
  ]);
  const [completeTodos, setcompleteTodos] = useState(["完了タスク"]);

  const onChangeValue = (e) => setTodoText(e.target.value);
  const onClickAddList = () => {
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickCompleteList = (index) => {
    const todoLists = [...incompleteTodos];
    const targetTodolist = todoLists[index];
    todoLists.splice(index, 1);
    setincompleteTodos(todoLists);
    const newCompleteList = [...completeTodos];
    newCompleteList.push(targetTodolist);
    setcompleteTodos(newCompleteList);
  };

  const onClickDeleteList = (index) => {
    const todoLists = [...incompleteTodos];
    todoLists.splice(index, 1);
    setincompleteTodos(todoLists);
  };

  const onClickReturnList = (index) => {
    const newCompleteList = [...completeTodos];
    const targetTodolis = newCompleteList[index];
    newCompleteList.splice(index, 1);
    setcompleteTodos(newCompleteList);
    incompleteTodos.push(targetTodolis);
    setincompleteTodos(incompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="todoを入力"
          value={todoText}
          onChange={onChangeValue}
        />
        <button onClick={onClickAddList}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((incompleteItem, index) => {
            return (
              <div className="list-row" key={index + 1}>
                <li>{incompleteItem}</li>
                <button onClick={() => onClickCompleteList(index)}>完了</button>
                <button onClick={() => onClickDeleteList(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((completeItem, index) => {
            return (
              <div className="list-row" key={index + 1}>
                <li>{completeItem}</li>
                <button onClick={() => onClickReturnList(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
