import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Shop = () => {
  const [formData, setFormData] = useState({
    carType: '',
    rentalCompany: '',
    carMake: '',
    carModel: '',
    location: '',
    pickUpDate: '',
    returnDate: ''
  })
  const navigate = useNavigate()
  const handleChange = event => {
    const {id, value} = event.target
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }))
  }
  const handleSubmit = event => {
    event.preventDefault()
    navigate('/results') 
  }
  const carTypes = [
    'Car',
    'Minivan',
    'Pickup',
    'SUV',
    'Van'
  ]
  const rentalCompanies = [
    'Enterprise',
    'Hertz',
    'Avis',
    'Budget',
    'National',
    'Thrifty',
    'Alamo'
  ]
  return (
    <div className='flex justify-center items-center min-h-screen bg-[#D8D7D7]'>
      <div className='w-full max-w-2xl p-10 pt-16 space-y-10 bg-[#D8D7D7]'>
        <header className='text-center'>
          <h1 className='text-4xl text-[#11465E]'>
            Let's Make Your Dream Rental Car... A Reality
          </h1>
          <p className='text-lg text-[#040200] mt-4'>
            Please complete the information below.
          </p>
        </header>
        <form
          onSubmit={handleSubmit}
          className='space-y-6'
        >
          <div className='flex items-center'>
            <label
              className='w-1/3 text-xl text-[#040200]'
              htmlFor='carType'
            >
              Car Type:
            </label>
            <select
              id='carType'
              value={formData.carType}
              onChange={handleChange}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
              required
            >
              <option value=''>Select your answer</option>
              {carTypes.map(type => (
                <option
                  key={type}
                  value={type}
                >
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className='flex items-center'>
            <label
              className='w-1/3 text-xl text-[#040200]'
              htmlFor='rentalCompany'
            >
              Rental Agency:
            </label>
            <select
              id='rentalCompany'
              value={formData.rentalCompany}
              onChange={handleChange}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
              required
            >
              <option value=''>Select your answer</option>
              {rentalCompanies.map(company => (
                <option
                  key={company}
                  value={company}
                >
                  {company}
                </option>
              ))}
            </select>
          </div>
          <div className='flex items-center'>
            <label
              className='w-1/3 text-xl text-[#040200]'
              htmlFor='carMake'
            >
              Car Manufacturer:
            </label>
            <input
              type='text'
              id='carMake'
              value={formData.carMake}
              onChange={handleChange}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
              placeholder='Optional'
            />
          </div>
          <div className='flex items-center'>
            <label
              className='w-1/3 text-xl text-[#040200]'
              htmlFor='carModel'
            >
              Car Model:
            </label>
            <input
              type='text'
              id='carModel'
              value={formData.carModel}
              onChange={handleChange}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
              placeholder='Optional'
            />
          </div>
          <div className='flex items-center'>
            <label
              className='w-1/3 text-xl text-[#040200]'
              htmlFor='location'
            >
              Location:
            </label>
            <input
              type='text' id='location'
              value={formData.location}
              onChange={handleChange}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
              required
            />
          </div>
          <div className='flex items-center'>
            <label
              className='w-1/3 text-xl text-[#040200]'
              htmlFor='pickUpDate'
            >
              Pick Up Date:
            </label>
            <input
              type='date'
              id='pickUpDate'
              value={formData.pickUpDate}
              onChange={handleChange}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
              required
            />
          </div>
          <div className='flex items-center'>
            <label
              className='w-1/3 text-xl text-[#040200]'
              htmlFor='returnDate'
            >
              Return Date:
            </label>
            <input
              type='date'
              id='returnDate'
              value={formData.returnDate}
              onChange={handleChange}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
              required
            />
          </div>
          <div className='flex items-center justify-center'>
            <button className='w-full p-2 text-xl text-[#5595AC] bg-[#040200] rounded focus:outline-none focus:ring-2 focus:ring-neutral-400' type='submit'>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Shop