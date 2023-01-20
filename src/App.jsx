import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

const App = () => {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

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
         />
      </div>
     
    </div>
  )
}

export default App
