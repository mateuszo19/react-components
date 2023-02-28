import React from 'react';
import Review from "./Review/Review";

import './Reviews.css';

export const Reviews = () => {
    return (
        <main>
            <div className="container">
                <div className="title">
                    <h2>our reviews</h2>
                    <div className="underline"></div>
                </div>
                <Review/>
            </div>
        </main>
    )
}

