import React, { useState, useEffect } from 'react'
import internal from "stream";

export const SingleColor = ({index, hexColor, color}: Props) => {
    const [alert, setAlert] = useState<boolean>(false);
    const bcg = color.rgb.join(',');
    const hexValue = `#${hexColor}`;

    useEffect(() => {
        const internalId = setInterval(() => {
            setAlert(false);
        },3000);
        return () => clearInterval(internalId);
    },[alert])

    return (
      <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={()=>{
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
      }}>
          <p className="percent-value">{color.weight}%</p>
          <p className="color-value">{hexValue}</p>
          {alert && <p className="alert">copied to clipboard</p>}
      </article>
    )
}

interface Props{
    index: number,
    hexColor: string,
    color: Color
}

interface Color{
    rgb:    number[];
    alpha:  number;
    type:   string;
    weight: number;
}
