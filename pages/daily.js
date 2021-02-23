import Head from 'next/head'
import CardTitle from '../components/CardTitle'
import Schedule from '../components/Schedule'

const Daily = ({ schedule }) => {
  return (
    <>
      <Head>
        <title>Fábrica de vehículos | cronograma</title>
      </Head>
      <CardTitle text='Cronograma Semanal' />
      <Schedule schedule={schedule} />
    </>
  )
}

Daily.getInitialProps = async () => {
  const res = await fetch('http://localhost:9000/schedule')
  const json = await res.json()
  return { schedule: json.schedule }
}


export default Daily