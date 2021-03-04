import React from 'react'
import Head from 'next/head'
import Table from '../components/tables/TableOrders'
import CardTitle from '../components/CardTitle'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

import OrderForm from '../components/form/OrderForm'
const Orders = ({ orders, vehicles }) => {
  const [open, setOpen] = React.useState(false)

  const handleToggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Head>
        <title>Fábrica de vehículos | Ordenes</title>
      </Head>
      <CardTitle text='Pedidos'>
        <IconButton color='primary' aria-label="settings" onClick={handleToggleOpen}>
          <AddIcon />
        </IconButton>
        <OrderForm vehicles={vehicles} open={open} handleToggleOpen={handleToggleOpen} />
      </CardTitle>
      <Table data={orders} />
    </>
  )
}

Orders.getInitialProps = async () => {
  const response = await Promise.all([
    fetch(`${process.env.apiUrl}/vehicle`),
    fetch(`${process.env.apiUrl}/order`)
  ]).then(function (responses) {
    return Promise.all(responses.map(function (response) {
      return response.json()
    }))
  }).then(function (data) {
    return [data[0].data, data[1].data]
  }).catch(function (error) {
    console.log(error)
  })

  return { vehicles: response[0], orders: response[1] }
}

export default Orders
