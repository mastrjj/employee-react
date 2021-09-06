import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import EmployeersPage from "./components/EmployeersPage";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=12")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const DATA = [
    { id: "0", name: "Eat" },
    { id: "1", name: "Sleep" },
    { id: "2", name: "Repeat" },
    { id: "3", name: "Sergio"}
  ];

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/employeers">Employeers</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/employeers">
            <EmployeersPage employeers={items}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
