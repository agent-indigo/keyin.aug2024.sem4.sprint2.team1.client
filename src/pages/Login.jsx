import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send GET request to retrieve contact by email
      const response = await axios.get(`http://localhost:8080/contacts`, {
        params: { email }
      });

      // Log the full response to understand its structure
      console.log('Full Response:', response.data);

      // Assuming the response contains the contact object directly
      const contact = response.data;

      // Directly access the pk if available
      const contactId = contact.pk; // Adjust based on actual response structure

      if (!contactId) {
        throw new Error('Contact ID not found');
      }

      console.log(`Contact ID: ${contactId}`);

      // Navigate to the account page with the contactId
      navigate('/account', { state: { contactId } });
    } catch (error) {
      console.error('Failed to retrieve contact:', error);
      alert('Failed to retrieve contact. Please check your email.');
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-[#D8D7D7]'>
      <div className='w-full max-w-md p-8 space-y-10 bg-white shadow-md rounded-lg'>
        <h2 className='text-4xl text-[#040200] text-center'>LOGIN</h2>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div className='flex items-center'>
            <label htmlFor='email' className='w-1/3 text-xl text-[#040200]'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleChange}
              className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full p-2 text-xl text-[#5595AC] bg-[#040200] rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
          >
            Retrieve Account
          </button>
        </form>
        <p className='text-md text-center text-gray-600'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-[#5595AC] hover:underline'>
            Sign up here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;