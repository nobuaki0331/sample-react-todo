import React from "react";

export const InCompleteTodo = ({ items, onDelete, onClick }) => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {items.map((incompleteItem, index) => {
          return (
            <div className="list-row" key={index + 1}>
              <li>{incompleteItem}</li>
              <button onClick={() => onClick(index)}>完了</button>
              <button onClick={() => onDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
