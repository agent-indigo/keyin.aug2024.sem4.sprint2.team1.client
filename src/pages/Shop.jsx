import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Promo from '../components/Promo';

const Shop = () => {
  const [formData, setFormData] = useState({
    category: '',
    agency: '',
  });

  const [pickUpDate, setPickUpDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [rentalDays, setRentalDays] = useState(0);
  const navigate = useNavigate();

  const handleChange = event => {
    const { id, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleDateChange = (id, value) => {
    if (id === 'pickUpDate') {
      setPickUpDate(value);
    } else {
      setReturnDate(value);
    }

    const start = new Date(pickUpDate || value);
    const end = new Date(returnDate || value);
    const days = Math.max((end - start) / (1000 * 60 * 60 * 24), 0);
    setRentalDays(days);
  };

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/results', { state: { formData, rentalDays, rentalCompanies } });
  };

  const carTypes = [
    'Car',
    'Minivan',
    'Pickup',
    'SUV',
    'Van'
  ];
  const rentalCompanies = [
    { name: 'Enterprise', agency_pk: 1 },
    { name: 'Hertz', agency_pk: 2 },
    { name: 'Avis', agency_pk: 3 },
    { name: 'Budget', agency_pk: 4 },
    { name: 'National', agency_pk: 5 },
    { name: 'Thrifty', agency_pk: 6 },
    { name: 'Alamo', agency_pk: 7 }
  ];

  return (
    <div className='flex justify-center items-center min-h-screen bg-[#D8D7D7]'>
      <div className='w-full max-w-2xl p-10 pt-16 space-y-10 bg-[#D8D7D7]'>
        <header className='text-center'>
          <Promo />
          <p className='text-lg text-[#040200] mt-4'>
            Please complete the information below.
          </p>
        </header>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='flex items-center'>
            <label className='w-1/3 text-xl text-[#040200]' htmlFor='category'>
              Car Type:
            </label>
            <select
              id='category'
              value={formData.category}
              onChange={handleChange}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
              required
            >
              <option value=''>Select your answer</option>
              {carTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className='flex items-center'>
            <label className='w-1/3 text-xl text-[#040200]' htmlFor='agency'>
              Rental Agency:
            </label>
            <select
              id='agency'
              value={formData.agency}
              onChange={handleChange}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
              required
            >
              <option value=''>Select your answer</option>
              {rentalCompanies.map(company => (
                <option key={company.agency_pk} value={company.agency_pk}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>
          <div className='flex items-center'>
            <label className='w-1/3 text-xl text-[#040200]' htmlFor='pickUpDate'>
              Pick Up Date:
            </label>
            <input
              type='date'
              id='pickUpDate'
              value={pickUpDate}
              onChange={e => handleDateChange('pickUpDate', e.target.value)}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
            />
          </div>
          <div className='flex items-center'>
            <label className='w-1/3 text-xl text-[#040200]' htmlFor='returnDate'>
              Return Date:
            </label>
            <input
              type='date'
              id='returnDate'
              value={returnDate}
              onChange={e => handleDateChange('returnDate', e.target.value)}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
            />
          </div>
          <div className='flex items-center'>
            <p className='w-full text-xl text-[#040200] text-center'>
              Rental Days: {rentalDays}
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <button className='w-full p-2 text-xl text-[#5595AC] bg-[#040200] rounded focus:outline-none focus:ring-2 focus:ring-neutral-400' type='submit'>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shop;