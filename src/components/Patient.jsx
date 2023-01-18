const Patient = ({patient}) => {
  console.log(patient)
 const {name, owner, email, date, symptoms} = patient
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
        Symptoms:{' '}
        <span className="font-normal normal-case">
            {symptoms}
        </span>
      </p>
    </div>
  );
};

export default Patient;
