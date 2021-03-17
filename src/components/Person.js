import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name}, {person.age} years old and my alias is {person.skill}</h2>
        </div>
    )
}

export default Person
