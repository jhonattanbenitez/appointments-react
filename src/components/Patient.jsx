const Patient = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-grey-700">
        Name: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-grey-700">
        Owner: <span className="font-normal normal-case">Jhonattan</span>
      </p>
      <p className="font-bold mb-3 text-grey-700">
        Email: <span className="font-normal normal-case">test@test.com</span>
      </p>
      <p className="font-bold mb-3 text-grey-700">
        Date in: <span className="font-normal normal-case">October 10th</span>
      </p>
      <p className="font-bold mb-3 text-grey-700">
        Symptoms:{' '}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi,
          fuga sit dolore necessitatibus cupiditate quam et, eum dolorem quo
          libero laborum eaque molestiae minus officia odit iste quas impedit.
        </span>
      </p>
    </div>
  );
};

export default Patient;
