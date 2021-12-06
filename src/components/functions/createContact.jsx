import React from 'react';

function createContacts(props) {
    return (
        <Card
            id={props.id}
            imgUrl={props.imgURL}
            name={props.name}
            phone={props.phone}
            email={props.email}

        />
    );
}

export { createContacts };