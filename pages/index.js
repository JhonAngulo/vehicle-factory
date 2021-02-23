import Head from 'next/head'
import Table from '../components/TableVehicles'
import CardTitle from '../components/CardTitle'
import VehicleFrom from '../components/form/VehicleForm'


const Home = ({ vehicles }) => {
  return (
    <>
      <Head>
        <title>Fábrica de vehículos | Inicio</title>
      </Head>
      <CardTitle text='Vehiculos fabricables'>
        <VehicleFrom />
      </CardTitle>
      <Table data={vehicles} />
    </>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:9000/vehicle')
  const json = await res.json()
  return { vehicles: json.vehicles }
}

export default Home