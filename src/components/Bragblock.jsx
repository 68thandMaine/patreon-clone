import React from 'react';
import Money from './Money';
import LightBulb from './LightBulb'
import Graph from './Graph'

function Bragblock() {
  return(
    <div className="wrapper">
    <style jsx>{`
      .wrapper{
        font-family: America, sans-serif;
        display: grid;
        padding-left: 10%;
        padding-right: 10%;
        background-color: rgb(4,44,73);
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 30px;
        height: 431px;
        width: 1047px;
      }

      div {
        border: 1px solid white;
        color: white;
        padding-top: 50px;
        padding-bottom: 50px;
      }
    `}
    </style>
      <div>

        <Money/>
        <h2>A meaningful revenue stream</h2>
        <p>Fans pay you a subscription amount of their choice in exchange for exclusive experiences & behind-the-scenes content.</p>
      </div>
      <div>
      <LightBulb/>
        <h2>Regain creative freedom</h2>
        <p>Fans pay you a subscription amount of their choice in exchange for exclusive experiences & behind-the-scenes content.</p>
      </div>
      <div>
      <Graph/>
        <h2>Over $350 million sent to creators</h2>
        <p>Fans pay you a subscription amount of their choice in exchange for exclusive experiences & behind-the-scenes content.</p>
      </div>
    </div>
  )
}

export default Bragblock
