import React from 'react';
import {DishInterface} from "../../../types/types";


export const Categories = ({categories, filterItems}: Props) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                    return(
                        <button type="button" className="filter-btn" key={index} onClick={() => filterItems(category)}>
                            {category}
                        </button>
                    )
                }
            )}
        </div>
    );
};

interface Props {
    categories: string[],
    filterItems(category: string): void
}
