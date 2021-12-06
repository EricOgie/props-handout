import React from 'react';

function createContacts(props) {
    return (
        <Card
            imgUrl={props.imgURL}
            name={props.name}
            phone={props.phone}
            email={props.email}

        />
    );
}

export { createContacts };