import React from 'react';
import {Tour} from './Tour';
import {TourInteface} from "../../../types/types";

export const Tours = ({tours, removeTour}: Props) => {
    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map(tour => <Tour key={tour.id} tour={tour} removeTour={removeTour}/>)}
            </div>
        </section>

    );
};

interface Props{
    tours: TourInteface[],
        removeTour(id: string):void
}
