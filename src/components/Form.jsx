import { useState, useEffect } from 'react';
import Error from './Error';

const Form = ({ patients, setPatients, patient }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      const { name, owner, email, date, symptoms } = patient;
      setName(name);
      setOwner(owner);
      setEmail(email);
      setDate(date);
      setSymptoms(symptoms);
    }
  }, [patient]);

  const idGenerator = () => {
    const date = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);

    return date + random;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //Form Validation

    if ([name, owner, email, date, symptoms].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    const objPatient = {
      name,
      owner,
      email,
      date,
      symptoms,
    };

    if (patient.id) {
      //edit
      objPatient.id = patient.id;
      const updatedPatients = patients.map((patientState) =>
        patientState.id === patient.id ? objPatient : patientState
      );
      setPatients(updatedPatients);
    } else {
      //new patient
      objPatient.id = idGenerator();
      setPatients([...patients, objPatient]);
    }

    setName('');
    setOwner('');
    setEmail('');
    setDate('');
    setSymptoms('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patients Follow up</h2>
      <p className="text-center mt-5 mb-10">
        Add patient and{' '}
        <span className="text-indigo-600 font-bold">admisions</span>
      </p>
      <form
        action=""
        className="bg-white shadow-md rounded py-10 px-5 mb-10 mx-5"
        onSubmit={handleSubmit}
      >
        {error && <Error message="Please complete all the fields" />}
        <div className="my-5">
          <label htmlFor="pet" className="block text-gray-700">
            Pet's Name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Pet's name"
            className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label htmlFor="owner" className="block text-gray-700">
            Owner's Name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Owner's name"
            className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label htmlFor="email" className="block text-gray-700">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Owner's contact e-mail"
            className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label htmlFor="release" className="block text-gray-700">
            Release
          </label>
          <input
            id="release"
            type="date"
            value={date}
            className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label htmlFor="symptoms" className="block text-gray-700">
            Symptoms
          </label>
          <textarea
            name="symptoms"
            id="symptoms"
            value={symptoms}
            cols="30"
            rows="10"
            className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
            placeholder="Describe the symptoms"
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={patient.id ? 'Edit Patient' : 'Add Patient'}
        />
      </form>
    </div>
  );
};
export default Form;
