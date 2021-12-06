import React from "react";
import Card from "./Card";
import { people } from "../Values/people";
import { eric } from './eric';
import Avatar from './Avatar';


function createContacts(person) {
  return (
    <Card
      key={person.id}
      imgUrl={person.imgURL}
      name={person.name}
      phone={person.phone}
      email={person.email}

    />
  );
}

function App() {
  return (
    <div >
      <h1 className="heading">My Super Stars Collection</h1>
      <Avatar src={eric} />
      {people.map(createContacts)}
    </div>
  );
}

export default App;
