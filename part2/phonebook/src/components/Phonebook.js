import React from 'react'

const Phonebook = ({ people, confirmDelete }) => {
    return (
        <li>{people.name} {people.number}
        <button onClick={confirmDelete}>delete</button>
        </li>
    )
}

export default Phonebook