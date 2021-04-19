import './App.css'
import React, { useState, useEffect } from 'react'
import spaceX from './images/spacex.png'
import rocketSummary from './rocketSummary'
import { getRockets } from './api.js'
import WebVersion from './components/WebVersion'
import MobileVersion from './components/MobileVersion'

export default function App () {
  const [rockets, setRockets] = useState([])
  const [rocket, setRocket] = useState()
  const [show, setShow] = useState(false)
  const [rocketSpecs, setRocketSpecs] = useState()
  const [width, setWidth] = useState(window.innerWidth)
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  })

  useEffect(updateRockets, [show])

  function updateRockets () {
    getRockets().then(data => setRockets(data))
  }

  function showModal (name) {
    setShow(true)
    if (rockets) {
      for (const candidate of rockets) {
        console.log(candidate.name)

        if (candidate.name === name) {
          if (candidate.active === false) {
            candidate.status = 'Inactive'
          } else {
            candidate.status = 'Active'
          }
          setRocket(candidate)
        }
      }
      for (const candidate of rocketSummary) {
        if (candidate.name === name) {
          setRocketSpecs(candidate)
        }
      }
    }
  }

  function hideModal () {
    setShow(false)
    setRocket()
  }

  function titleCase (string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
  }

  return (
    <div>
      {(width > 1000)
        ? <WebVersion
            rocketSummary={rocketSummary} rocket={rocket} show={show} showModal={showModal} rocketSpecs={rocketSpecs}
            hideModal={hideModal} titleCase={titleCase} spaceX={spaceX}
          />
        : <MobileVersion
            rocketSummary={rocketSummary} rocket={rocket} show={show} showModal={showModal} rocketSpecs={rocketSpecs}
            hideModal={hideModal} titleCase={titleCase} spaceX={spaceX}
          />}
    </div>

  )
}
