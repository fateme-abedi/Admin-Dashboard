import React from 'react'
import Cards from '../cards/Cards'
import Table from '../table/Table'
import styles from './MainDash.module.css'

function MainDash(props) {
  return (
    <div className={styles.mainDash}>
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  )
}

export default MainDash
