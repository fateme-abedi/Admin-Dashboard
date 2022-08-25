import React, { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar'
import { UilTimes } from '@iconscout/react-unicons'
import 'react-circular-progressbar/dist/styles.css'
import Chart from 'react-apexcharts'
import './Card.css'

function Card(props) {
  const [expanded, setExpanded] = useState(false)
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard params={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard params={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  )
}

//Compact Card Component
function CompactCard({ params, setExpanded }) {
  const Png = params.png

  return (
    <motion.div
      className="compactCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={params.barValue}
          text={`${params.barValue}%`}
        />
        <span>{params.title}</span>
      </div>

      <div className="detail">
        <Png />
        <span>${params.value}</span>
        <span>last 24 hours</span>
      </div>
    </motion.div>
  )
}

//Expanded Card
function ExpandedCard({ params, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: 'area',
        height: 'auto',
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },

      fill: {
        colors: ['#fff'],

        type: 'gradient',
      },
      dataLabels: {
        enabled: false,
      },

      stroke: {
        curve: 'smooth',

        colors: ['#fff'],
      },

      tooltip: {
        x: {
          format: 'dd/MMM/yy HH:mm',
        },
      },

      grid: {
        show: true,
      },

      xaxis: {
        type: 'dateTime',
        categories: ['00', '01', '02', '03', '04', '05', '06'],
      },
    },
  }
  return (
    <motion.div
      className="expandedCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{alignSelf:'flex-end',color:'#fff',cursor: 'pointer'}}>
        <UilTimes onClick={setExpanded} />
      </div>

      <span>{params.title}</span>

      <div className="chartContainer">
        <Chart series={params.series} type="area" options={data.options} />
      </div>

      <span>last 24 hours</span>
    </motion.div>
  )
}

export default Card
