import React from 'react';
import {Person} from "../../../types/types";

export const List = ({people}: Props ) => {

    return (
        <>
            {people.map((person: Person) => {
                const {id ,name, age, image} = person;
                return(
                    <article key={id} className="person">
                        <img src={image} alt={name}/>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    );
};

interface Props{
    people: Person[]
}
