import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    password: '',
    confirmPassword: '',
  })
  const navigate = useNavigate() 
  const handleChange = event => {
    const {id, value} = event.target
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }))
  }
  const handleSubmit = event => {
    event.preventDefault()
    // Add logic for handling sign up here
    console.log('Form Data:', formData)
    // Assuming the sign-up process is successful
    navigate('/my-account') 
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-[#D8D7D7]'>
      <div className='w-full max-w-2xl p-10 pt-16 space-y-10 bg-[#D8D7D7]'>
        <div className='space-y-0'>
          <h2 className='text-4xl text-[#040200] text-center'>SIGN UP</h2>
          <p className='text-md text-[#040200] text-center'>
            Please complete all fields below to create your account
          </p>
        </div>
        <form
          className='space-y-6'
          onSubmit={handleSubmit}
        >
          {[
            {
              id: 'firstName',
              label: 'First Name'
            },
            {
              id: 'lastName',
              label: 'Last Name'
            },
            {
              id: 'email',
              label: 'Email',
              type: 'email'
            },
            {
              id: 'phoneNumber',
              label: 'Phone Number',
              type: 'tel'
            },
            {
              id: 'streetAddress',
              label: 'Street Address'
            },
            {
              id: 'city',
              label: 'City'
            },
            {
              id: 'province',
              label: 'Province'
            },
            {
              id: 'postalCode',
              label: 'Postal Code'
            },
            {
              id: 'password',
              label: 'Password',
              type: 'password'
            },
            {
              id: 'confirmPassword',
              label: 'Confirm Password',
              type: 'password'
            },
          ].map(({
            id,
            label,
            type = 'text'
          }) => (
            <div
              key={id}
              className='flex items-center'
            >
              <label
                htmlFor={id}
                className='w-1/3 text-xl text-[#040200]'
              >
                {label}
              </label>
              <input
                type={type}
                id={id}
                value={formData[id]}
                onChange={handleChange}
                className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
                required
              />
            </div>
          ))}
          <button
            type='submit'
            className='w-full p-2 text-xl text-[#5595AC] bg-[#040200] rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
          >
            Sign Up
          </button>
        </form>
        <p className='text-md text-center text-gray-600'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='text-[#5595AC] hover:underline'
          >
            Log in here!
          </Link>.
        </p>
      </div>
    </div>
  )
}
export default Signup