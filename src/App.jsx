import { useState, useEffect } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

const App = () => {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
   const getLocalStorage = () => {
      const patientsLocalStorage = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLocalStorage)
   }
   getLocalStorage();
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients])

  const deletePatient = (id) => {
    const updatedPatients = patients.filter(patient => patient.id !== id)
    setPatients(updatedPatients)
  }
   return (
    <div className="container mx-auto mt-10">
      <Header 

      />
      <div className="mt-12 md:flex">
        <Form 
          patients={patients}
          setPatients={setPatients}
          patient={patient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
         />
      </div>
     
    </div>
  )
}

export default App
