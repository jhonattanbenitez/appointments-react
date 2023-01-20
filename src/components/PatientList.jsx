import {React, useEffect} from 'react';
import Patient from './Patient';

export default function PatientList({ patients, setPatient }) {
  useEffect(() => {
    if(patients.length > 0 ) {
      console.log('nuevo paciente')
    }
  }, [patients])
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your{' '}
            <span className="text-indigo-600 font-bold">
              Patients and appoinments
            </span>
          </p>
          {patients.map((patient) => {
            return <Patient patient={patient} key={patient.id} setPatient={setPatient}/>;
          })}
        </>
      ) : (
        <>
        <h2 className="font-black text-3xl text-center">No Patients yet</h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Please add a patient{' '}
            <span className="text-indigo-600 font-bold">
              and they will be listed here
            </span>
          </p>
        </>
      )}
    </div>
  );
}
