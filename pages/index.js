import React, { useState } from 'react'
import Head from 'next/head'
import Table from '../components/tables/TableVehicles'
import CardTitle from '../components/CardTitle'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

import VehicleFrom from '../components/form/VehicleForm'

const Vehicles = ({ vehicles }) => {
  const [open, setOpen] = useState(false)
  const [vehicle, setVehicle] = useState({})

  const handleEditVehicle = data => {
    setVehicle(data)
    handleToggleOpen()
  }

  const handleToggleOpen = () => {
    setOpen(!open)
    if (open) {
      setVehicle({})
    }
  }

  return (
    <>
      <Head>
        <title>Fábrica de vehículos | Inicio</title>
      </Head>
      <CardTitle text='Vehiculos fabricables'>
        <IconButton color='primary' aria-label="settings" onClick={handleToggleOpen}>
          <AddIcon />
        </IconButton>
        <VehicleFrom open={open} handleToggleOpen={handleToggleOpen} data={vehicle} />
      </CardTitle>
      <Table data={vehicles} edit={handleEditVehicle} />
    </>
  )
}

Vehicles.getInitialProps = async () => {
  const res = await fetch(`${process.env.apiUrl}/vehicle`)
  const json = await res.json()
  return { vehicles: json.data }
}

export default Vehicles
