import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import logo from '../../imgs/logo.png'
import sidedarData from './SidebarData'
import { UilSignout, UilBars } from '@iconscout/react-unicons'
import { motion } from 'framer-motion'

function Sidebar(props) {
  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  }
  console.log(window.innerWidth)
  return (
    <>
      <div
        className={styles.bars}
        style={expanded ? { left: '37%' } : { left: '5%' }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className={styles.sidebar}
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
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
      </motion.div>
    </>
  )
}

export default Sidebar
