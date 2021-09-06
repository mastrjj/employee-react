import React from "react";

export default function Employeer(props) {

  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button" className="btn btn__danger"
          onClick={() => props.deleteEmployeer(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}
