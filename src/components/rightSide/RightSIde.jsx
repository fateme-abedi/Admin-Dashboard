import React from 'react'
import styles from './RightSide.module.css'
import Updates from '../update/Update'
import CustomerReview from '../customerReview/CustomerReview'

function RightSIde(props) {
  return (
    <div className={styles.rightSide}>
      <div style={{ marginBottom: '2rem' }}>
        <h1>Updates</h1>
        <Updates />
      </div>
      <div>
        <h1>Customer Review</h1>
        <CustomerReview />
      </div>
    </div>
  )
}

export default RightSIde
