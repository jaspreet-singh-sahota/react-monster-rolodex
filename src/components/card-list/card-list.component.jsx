import React from 'react'
import './card-list.styles.css'
import { Card } from "../card/card";

export const CardList = (props) => (
  <div className="card-list">{props.monsters.map(monster => (
    <Card key={monster.id} yo={monster.id} monster={monster.name} ></Card>))}
    {/* {console.log(props.monsters)} */}
  </div>
)