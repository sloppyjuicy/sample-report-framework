import { useState, useEffect } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import AddSchedule from './components/AddSchedule'
import Schedules from './components/Schedules'

function App() {

  const [showAddSchedule, setShowAddSchedule] = useState(false)
  const [schedules, setSchedules] = useState([])

  useEffect(() => {
    const getSchedules = async () => {
      const schedulesFromServer = await fetchSchedules()
      console.log(schedulesFromServer)
      setSchedules(schedulesFromServer)
    }

    getSchedules();
  }, [])

  const fetchSchedules = async () => {
    const res = await fetch('http://localhost:5000/')
    const data = await res.json()

    return data
  }

  const addSchedule = async (schedule) => {
    console.log(JSON.stringify(schedule))
    const res = await fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(schedule)
    })

    const data = await res.json()
    schedule['id'] = data['id']
    setSchedules([...schedules, schedule])
  }

  //Delete Task
  const deleteSchedule = async (id) => {
    // alert("DELETED!")
    await fetch(`http://localhost:5000/`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({"id": id})
    })

    setSchedules(schedules.filter((schedule) => schedule.id !== id))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddSchedule(!showAddSchedule)} showAdd={showAddSchedule} />
      {showAddSchedule && <AddSchedule onAdd={addSchedule} />}
      {
        schedules.length > 0 ?
          <Schedules schedules={schedules} onDelete={deleteSchedule} /> : 'No Schedules To Show'
      }
      <Footer />
    </div>
  );
}

export default App;
