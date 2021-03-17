import React from 'react'
import Person from './Person'

function NameList() {

    const names = ["ovie","kolo","moyo"]

    const persons = [
        {
            id:1,
            name:"Bruce",
            age:30,
            skill:"Batman"
        },
        {
            id:2,
            name:"Diana",
            age:30,
            skill:"Wonderwoman"
        }
    ]

    // const personList = persons.map(person=>(
    //     <Person key={person.id} person={person}></Person>
    // ))

    const nameList = names.map((name,index)=>(
        <h2 key={index}>{index} {name}</h2>
    ))

    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
