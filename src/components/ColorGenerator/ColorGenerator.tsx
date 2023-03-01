import React, { useState } from 'react'
import {SingleColor} from './SingleColor/SingleColor'
import Values from 'values.js';

import './ColorGenerator.css';

export const ColorGenerator = () => {
    const [color, setColor] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [list, setList] = useState<Values[]>(new Values('#f15025').all(10));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setList(colors)
            setError(false)
        } catch (error) {
            setError(true)
        }
    }

    return(
        <>
            <section className='container'>
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder='#f15025'
                        className={`${error ? 'error' : null}`}
                    />
                    <button className='btn' type='submit'>
                        submit
                    </button>
                </form>
            </section>
            <section className='colors'>
                {list.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            color={color}
                            index={index}
                            hexColor={color.hex}
                        />
                    )
                })}
            </section>
        </>

)
}
// {/*{...color}*/}

