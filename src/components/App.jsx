import React from "react";
import Card from "./Card";

function App() {
  const imgUrl = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg";
  var name = 'Beyonce'
  var phone = '+123 456 789'
  var email = 'b@beyonce.com'
  return (
    <div >
      <h1 className="heading">My Contacts</h1>
      <Card imgUrl={imgUrl} name={name} phone={phone} email={email} />
    </div>
  );
}

export default App;
