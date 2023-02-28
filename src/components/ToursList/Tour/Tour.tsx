import React, { useState } from 'react';
import {TourInteface} from "../../../types/types";

export const Tour = ({tour, removeTour}: Props) => {
    const [readMore, setReadMore] = useState<boolean>(false);

    const {id, image, name, price, info} = tour;
    return (
        <article className="single-tour">
            <img src={image} alt={name}/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {readMore ? info :`${info.substring(0,200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "show less" : "read more"}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>
                    not interested
                </button>
            </footer>
        </article>
    );
};

interface Props{
    tour: TourInteface,
    removeTour(id: string):void
}
