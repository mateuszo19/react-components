import React, {useState} from 'react';
import {questions} from '../../data/questions';
import {QuestionInterface} from "../../types/types";
import {Question} from "./Question/Question";
import './Accordion.css';

 export const Accordion = () => {
    const [quesetions, setQuestions] = useState<QuestionInterface[]>(questions);
    return (
        <main>
            <div className="container">
                <h3>quesetions and answers about login</h3>
                <section className="info">
                    {
                        quesetions.map((question) => <Question key={question.id} question={question}/>)
                    }
                </section>
            </div>
        </main>
    );
}

