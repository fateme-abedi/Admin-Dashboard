import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import logo from '../../imgs/logo.png'
import sidedarData from './SidebarData'
import { UilSignout } from '@iconscout/react-unicons'

function Sidebar(props) {
  const [selected, setSelected] = useState(0)

  console.log(sidedarData)
  return (
    <div className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <span>
          sh<span>o</span>p
        </span>
      </div>

      {/* Menu */}
      <div className={styles.menu}>
        {sidedarData.map((item, index) => {
          return (
            <div
              className={`${styles.menuItem} ${
                index === selected ? styles.active : ''
              }`}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          )
        })}
        <div className={styles.menuItem}>
          <UilSignout />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
