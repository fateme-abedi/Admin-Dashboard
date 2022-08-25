import React from 'react'
import styles from './Update.module.css'
import UpdateData from './UpdateData'

function Update(props) {
  return (
    <div className={styles.updates}>
      {UpdateData.map((update) => {
        return (
          <div className={styles.update}>
            <img src={update.img} alt={update.name} />

            <div className={styles.notif}>
              <div style={{ marginBottom: '0.5rem' }}>
                <span>{update.name}</span>
                <span> {update.notif}</span>
              </div>

              <span>{update.time}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Update
