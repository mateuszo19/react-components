import React, {useState} from 'react';
import {menu} from '../../data/menu'
import {DishInterface} from "../../types/types";
import {Categories} from "./Categories/Categories";
import {Menu} from "./Menu/Menu";

import './RestaurantMenu.css';

const allCategories: string[] = ['all', ...new Set(menu.map((item: DishInterface) => item.category))];

export const RestaurantMenu = () => {
    const [menuItems, setMenuItems] = useState<DishInterface[]>(menu);
    const [categories, setCategories] = useState<string[]>(allCategories);

    const filterItems = (category: string):void => {
        if(category === 'all'){
            setMenuItems(menu);
        }else{
            const newItems = menu.filter((item) => item.category === category);
            setMenuItems(newItems);
        }
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems}/>
                <Menu items={menuItems}/>
            </section>
        </main>
    );
}

