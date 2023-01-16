import {useState, useEffect} from 'react'

const Form = () => {
  const [name, setName] = useState('')


  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className="font-black text-3xl text-center">Patients Follow up</h2>
        <p className='text-center mt-5 mb-10'>Add patient and {' '} <span className="text-indigo-600 font-bold">admisions</span></p>
        <form action="" className="bg-white shadow-md rounded py-10 px-5 mb-10">
            <div className='my-5'>
              <label htmlFor="pet" className='block text-gray-700'>Pet's Name</label>
              <input 
                id="pet"
                type="text"
                placeholder="Pet's name"
                className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
                value={name}
                onChange= {(e)=> setName(e.target.value)}
              />
            </div>
            <div className='my-5'>
              <label htmlFor="owner" className='block text-gray-700'>Owner's Name</label>
              <input 
                id="owner"
                type="text"
                placeholder="Owner's name"
                className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
              />
            </div>
            <div className='my-5'>
              <label htmlFor="email" className='block text-gray-700'>E-mail</label>
              <input 
                id="email"
                type="email"
                placeholder="Owner's contact e-mail"
                className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
              />
            </div>
            <div className='my-5'>
              <label htmlFor="release" className='block text-gray-700'>Release</label>
              <input 
                id="release"
                type="date"
                className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
              />
            </div>
            <div className='my-5'>
              <label htmlFor="symptoms" className='block text-gray-700'>Symptoms</label>
              <textarea 
                name="symptoms" 
                id="symptoms" 
                cols="30" 
                rows="10" 
                className="border-2 rounded w-full p-2 mt-2 placeholder-gray-400"
                placeholder="Describe the symptoms"
                />
            </div>
            <input
                type='submit'
                className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                value="add pacient"
                
                />
        </form>
    </div>
  )
}
export default Form;

