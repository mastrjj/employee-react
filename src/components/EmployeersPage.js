import React, { useState } from "react";
import Employeer from "./Employeer";
import Form from "./Form"
import { nanoid } from "nanoid";


export default function EmployeersPage(props) {

  const [employeers, setEmployeers] = useState(props.employeers);

  const employeerList = employeers.map(employeer => (
    <Employeer
      id={employeer.id}
      name={employeer.first_name}
      key={employeer.id}
      deleteEmployeer={deleteEmployeer}
    />
  ));

  function addEmployeer(name) {
    const newEmployeer = { id: nanoid(), first_name: name };
    setEmployeers([...employeers, newEmployeer]);
  }

  function deleteEmployeer(id) {
    const remainingEmployeers = employeers.filter(employeer => id !== employeer.id);
    setEmployeers(remainingEmployeers);
  }

  return (
    <div className="todoapp stack-large">
      <Form addEmployeer={addEmployeer}/>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {employeerList}
      </ul>
    </div>
  );
}
