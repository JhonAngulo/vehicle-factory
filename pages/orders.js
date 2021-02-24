import React from 'react';
import Head from 'next/head'
import Table from '../components/tables/TableOrders'
import CardTitle from '../components/CardTitle'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import OrderForm from '../components/form/OrderForm'
const Orders = ({ orders }) => {
  const [open, setOpen] = React.useState(false);

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  
  return (
    <>
      <Head>
        <title>Fábrica de vehículos | Ordenes</title>
      </Head>
      <CardTitle text='Pedidos'>
        <IconButton color='primary' aria-label="settings" onClick={handleToggleOpen}>
          <AddIcon />
        </IconButton>
        <OrderForm open={open} handleToggleOpen={handleToggleOpen} />
      </CardTitle>
      <Table data={orders} />
    </>
  )
}

Orders.getInitialProps = async () => {
  const res = await fetch('http://localhost:9000/order')
  const json = await res.json()
  return { orders: json.data }
}

export default Orders
