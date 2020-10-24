import React from "react";

export const CompeteTodo = ({ items, onClick }) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {items.map((completeItem, index) => {
          return (
            <div className="list-row" key={index + 1}>
              <li>{completeItem}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
