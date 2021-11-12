import React from "react";
import style from './Car.module.css'

export default (props) => {
  return (
      <div className={style.border}>
        <div className={style.title}>
          <div>
            <h3>{props.name}</h3>
          </div>
          <p> Year: <strong>{props.year}</strong></p>
        </div>
          <div style={{padding: '20px', width: '800px', height: '500px', margin: 'auto'}}
               className={style.a}>
            <a href={props.href}>
              <img src={props.image} alt="logo" width='800px' height='500px'/>
            </a>
          </div>
      </div>
  )
}