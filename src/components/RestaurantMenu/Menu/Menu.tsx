import React from 'react';
import {DishInterface} from "../../../types/types";

export const Menu = ({items}: Props) => {
    return(
        <div className="section-center">
            {items.map((menuItem) => {
                const {id,img,price,title,desc} = menuItem;
                return (
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo"/>
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">{price}</h4>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
};

interface Props{
    items: DishInterface[]
}

