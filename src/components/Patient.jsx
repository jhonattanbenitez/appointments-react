const Patient = ({ patient, setPatient, deletePatient }) => {
  const { name, owner, email, date, symptoms } = patient;

  const handleDelete = () => {
    const response = confirm('Do you really want to delete this patient file?');
    if(response) {
      deletePatient(patient.id)
    }
  } 
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-grey-700">
        Name: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-grey-700">
        Owner: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-grey-700">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-grey-700">
        Date in: <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-grey-700">
        Symptoms: <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
