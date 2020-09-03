import React from 'react'
import './card-list.styles.css'
import { Card } from "../card/card";

export const CardList = (props) => {
  return  <div className="card-list">{props.monsters.map(monster => {
              return <h1 key={monster.id} > {monster.name} </h1>})}
          </div>
}