import React from "react";
import Card from "./Card";
import { people } from "../Values/people";

// import contacts from '../contacts';


console.log({ res: people });

function App() {
  const imgUrl = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg";
  var name = 'Beyonce'
  var phone = '+123 456 789'
  var email = 'b@beyonce.com'
  return (
    <div >
      <h1 className="heading">My Contacts</h1>
      <Card imgUrl={people[0].imgURL} name={people[0].name} phone={people[0].phone} email={people[0].email} />
      <Card imgUrl={people[1].imgURL} name={people[1].name} phone={people[1].phone} email={people[1].email} />
      <Card imgUrl={people[2].imgURL} name={people[2].name} phone={people[2].phone} email={people[2].email} />
    </div>
  );
}

export default App;
