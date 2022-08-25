import React from 'react'
import styles from './Cards.module.css'
import cardsData from './CardsData'
import Card from '../card/Card'

function Cards(props) {
  return (
    <div className={styles.cards}>
      {cardsData.map((item, id) => {
        return (
          <div className={styles.parentContainer}>
            <Card
              title={item.title}
              color={item.color}
              barValue={item.barValue}
              value={item.value}
              png={item.png}
              series={item.series}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cards
