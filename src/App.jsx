import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodo } from "./components/InCompleteTodo";
import { CompeteTodo } from "./components/CompleteTodo";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeValue}
        onClick={onClickAddList}
      />
      <InCompleteTodo
        items={incompleteTodos}
        onClick={onClickCompleteList}
        onDelete={onClickDeleteList}
      />
      <CompeteTodo items={completeTodos} onClick={onClickReturnList} />
    </>
  );
};
