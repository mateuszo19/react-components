import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {QuestionInterface} from "../../../types/types";
export const Question = ({question}: Props) => {
    const [showInfo, setShowInfo] = useState<boolean>(false);

    const {title, info} = question;
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    );
};

interface Props{
    question: QuestionInterface
}
