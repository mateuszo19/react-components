import React, {useState} from 'react';
import {bithdays as data} from '../../data/bithdays';
import {Person} from "../../types/types";
import {List} from "./List/List";

import './BirthdayReminder.css';

export const BirthdayReminder = () => {
    const [people, setPeople] = useState<Person[] | []>(data);

    return (
        <main>
            <section className="container">
                <h3>{people.length} {people.length < 2 ? 'birthday' : 'birthdays'} todays</h3>
                <List people={people}/>
                <button onClick={() =>  setPeople([])}>Clear ALL</button>
            </section>
        </main>
    );
}
