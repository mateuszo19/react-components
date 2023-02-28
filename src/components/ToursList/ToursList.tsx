import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {TourInteface} from "../../types/types";
import {Loading} from "../Loading/Loading";
import {Tours} from "./Tour/Tours";

import './ToursList.css';

const url = 'https://course-api.com/react-tours-project'
export const ToursList = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [tours, setTours] = useState<TourInteface[]>([]);

    const removeTour = (id: string): void => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    const fetchTours = async () => {
        setLoading(true);
        try{
            await fetch('https://course-api.com/react-tours-project')
                .then((response) => response.json())
                .then((data) => setTours(data));
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e);
        }

    }

    useEffect(() => {
        fetchTours();
    },[])

    if(loading){
        return (
            <main>
                <Loading/>
            </main>
        )
    }
    if(tours.length === 0){
        return (
            <main>
                <div className="title">
                    <h2>no tours left</h2>
                    <button className="btn" onClick={() => fetchTours()}>refresh</button>
                </div>
            </main>
        )
    }

    return(
        <main>
            <Tours tours={tours} removeTour={removeTour}/>
        </main>
    )
}

