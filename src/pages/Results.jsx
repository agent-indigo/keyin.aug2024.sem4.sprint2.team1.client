import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Promo from '../components/Promo';

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state || {}; 
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (formData) {
      fetch(`/vehicles/search/findByCategoryAndAgencyPk?category=${encodeURIComponent(formData.category)}&agency_pk=${formData.agency}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const vehicles = data._embedded ? data._embedded.vehicles : [];
          setResults(vehicles);
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to load results');
          setLoading(false);
        });
    } else {
      setLoading(false);
      setError('No search criteria provided');
    }
  }, [formData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleAddToCart = vehicle => {
    console.log(`Adding to cart: ${vehicle}`);
    navigate('/cart');
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-[#D8D7D7]'>
      <div className='w-full max-w-4xl p-1 pt-16 space-y-8 bg-[#D8D7D7]'>
        <header className='text-center'>
          <Promo />
          <p className='text-2xl text-[#040200] mt-4'>
            Results for your selection
          </p>
        </header>
        <div className='flex justify-center mt-2'>
          <Link to='/shop' className='text-xl text-[#5595AC] hover:underline'>
            Modify Search
          </Link>
        </div>
        <div className='overflow-x-auto mt-6'>
          <table className='table-auto w-full'>
            <thead>
              <tr className='bg-[#040200] text-[#D8D7D7]'>
                <th className='px-4 py-2 font-light text-2xl'>Manufacturer</th>
                <th className='px-4 py-2 font-light text-2xl'>Model</th>
                <th className='px-4 py-2 font-light text-2xl'>Year</th>
                <th className='px-4 py-2 font-light text-2xl'>Capacity</th>
                <th className='px-4 py-2 font-light text-2xl'>Vehicle Type</th>
                <th className='px-4 py-2 font-light text-2xl'>Standard Rate</th>
                <th className='px-4 py-2 font-light text-2xl'>Premium Insurance</th>
                <th className='px-4 py-2 font-light text-2xl'>Standard Insurance</th>
              </tr>
            </thead>
            <tbody>
              {results.map((vehicle, index) => (
                <tr key={index} className='bg-[#D8D7D7] text-xl text-center'>
                  <td className='px-4 py-2 text-black'>{vehicle.manufacturer}</td>
                  <td className='px-4 py-2 text-black'>{vehicle.model}</td>
                  <td className='px-4 py-2 text-black'>{vehicle.year}</td>
                  <td className='px-4 py-2 text-black'>{vehicle.capacity}</td>
                  <td className='px-4 py-2 text-black'>{vehicle.category}</td>
                  <td className='px-4 py-2 text-black'>{vehicle.stdRate}</td>
                  <td className='px-4 py-2 text-black'>
                    <div className='flex flex-col items-center'>
                      <span>{vehicle.premIns}</span>
                      <input
                        type='radio'
                        name={`vehicle-${index}`}
                        value='standard'
                        className='mt-1'
                      />
                    </div>
                  </td>
                  <td className='px-4 py-2 text-black'>
                    <div className='flex flex-col items-center'>
                      <span>{vehicle.stdIns}</span>
                      <input
                        type='radio'
                        name={`vehicle-${index}`}
                        value='premium'
                        className='mt-1'
                      />
                    </div>
                  </td>
                  <td className='px-4 py-2'>
                    <button
                      className='bg-[#040200] hover:bg-gray-800 text-[#5595AC] py-1 px-3 rounded focus:outline-none focus:shadow-outline'
                      type='button'
                      onClick={() => handleAddToCart(vehicle)}
                    >
                      Add To Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;

