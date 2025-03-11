import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import StaffForm from './components/StaffForm'
import StaffTable from './components/StaffTable'
import { postStaff, getStaff } from './api/staff.api.js'

function App() {
  const [staff, setStaff] = useState([])

  useEffect(() => {
    getStaff().then(data => setStaff(data)).catch(err => console.log(err))
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    postStaff({
      name: e.target.name.value,
      title: e.target.title.value,
      salary: e.target.salary.value
    }).then(data => setStaff([...staff, data])).catch(err => console.log(err))

  }

  return (
    <>
      <Navbar/>
      <StaffForm submitHandler={handleSubmit}/>
      <StaffTable staff={staff}/>
    </>
  )
}

export default App
